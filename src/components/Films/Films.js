import { useState, useEffect } from 'react';
import './Films.css';
import Film from '../Film/Film';
import {NavLink, Route, Routes} from 'react-router-dom';
import { useFav } from '../../context/FavProvider';

export default function Films(){
  const [list, setList] = useState([]);
  const [fav] = useFav();
  
  async function fetchList(){
    const url = 'https://swapi.dev/api/films';
    const resp = await fetch(url);

    if(!resp.ok) throw new Error(resp.statusText);

    const data = await resp.json();
    setList(data.results);
  }

  useEffect(() => {
      fetchList().catch((e) => {console.log(e)})  
  }, [])

  function findFilm(id){
    console.log(id);
    id = parseInt(id);
    return (list[id-1]);
  }
  return(
    <>
      <div>
        <h2>List of films</h2>
      { list.length === 0 && <p> No films</p> }
      {list.map((film, index) => (
        <p key = {index}>
          <NavLink className={({isActive}) => (isActive ? "active-style" : 'none')} to={`/films/${index+1}`}>
            {film.title}
            {fav.id === parseInt(index+1) && <span>favorite</span>}
          </NavLink>
        </p>
      ))}

      </div>
      <div className='details'>
        <Routes>
          <Route path = ":id" element={<Film findFilm = {findFilm}/>} />
        </Routes>
      </div>
    </>
  );
}
