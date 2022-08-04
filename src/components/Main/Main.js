import './Main.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Films from '../Films/Films';
import People from '../People/People';
import Person from '../Person/Person';
import { useEffect, useState } from 'react';

export default function Main(){
  //people data does not unmount because it is fetched at the parent element
  const [pList, setPList] = useState([]);

  async function fetchData(type){
    const url = `https://swapi.dev/api/${type}`;
    const resp = await fetch(url);

    if(!resp.ok) throw new Error(resp.statusText);

    let data = await resp.json();
    // console.log(data.results);
    return data.results;
  }
  useEffect(() => {
    (async() => {
      const data = await fetchData('people');
      setPList([...data]);
    })()

  }, [])
  
  return(
    <div style = {{display: 'flex'}}>
      <Routes>
        
        {/* Nested Routing */}
        <Route path = '/films/*' element = {<Films />} />

        {/* to match multiple routing */}
        <Route path = '/people/:id' element = {<Person list = {pList}/>} />
        <Route path = '/people/' element = {<People list = {pList}/>} />

        {/* if nothing matches */}
        <Route path = '/*' element = {<Home />} />
      </Routes>
    </div>
  );
}
