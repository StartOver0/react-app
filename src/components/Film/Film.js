import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useFav} from '../../context/FavProvider';
import './Film.css';

export default function Film({findFilm}){
  const [film, setFilm] = useState(null);
  const [fav, updateFav] = useFav();
  const {id} = useParams();

  useEffect(() => {
    setFilm(findFilm(id));
  }, [findFilm, id]);
  
  function clicked(){
    updateFav('', parseInt(id), film);
  }
  return (
    <div className = 'bonito'>
      <p> {film && film.title}</p>
      <p> {film && film.release_date}</p>
      <p> {film && fav.id}</p>
      <p> {fav.data.title && <>favorite movie is {fav.data.title}</>}</p>
      <p> {film && <button onClick={clicked}>Set as favorite</button>}</p>
    </div>
  )
}
