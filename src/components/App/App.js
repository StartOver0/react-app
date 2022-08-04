// import { render } from '@testing-library/react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import {useState } from 'react';
import Main from '../Main/Main';
import {FavProvider} from '../../context/FavProvider';

//component function 
export default function App() {
  let name = 'Company Name';
  const [Terms, setTerms] = useState([]);
  const [Results, setResults] = useState([]);
  const [Type, setType] = useState('films');

  function addTerm(term){
    term = term.trim();
    const index = Terms.indexOf(term);
    if(index >= 0){
      Terms.splice(index, 1);
    }
    setTerms([term, ...Terms]);
  }

  async function fetchData(keyword){
    let url = `https://swapi.dev/api/${Type}`; 

    if(keyword){
      url += `/?search=${keyword}`;
    }
    let resp = await fetch(url);

    if(!resp.ok) throw new Error(resp.statusText);

    let data = await resp.json();

    setResults(data.results);
  }
  return (
    <FavProvider>
      <div>
        <Header company = {name}/>
        <SearchBar Term={Terms[0]} addTerm={addTerm}/>
        
        <main className='content'>
          <SearchHistory Terms={Terms} /> 
          <Main />
        </main>
      </div>
    </FavProvider>
  );
}


// import React from 'react';
// export default class App extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return (
//       <div> 
//         <h1>hello world</h1>
//       </div>
//     )
//   }
// }