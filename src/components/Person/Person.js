import './Person.css';
import { useParams } from 'react-router-dom';
import People from '../People/People';

export default function Person({list}){
  const {id} = useParams();
  const person = list[id-1];

  console.log(list);
  return(
    <>
      <div>
          <People list = {list} /> 
      </div>
      <div className='bonito'>
          <p> {person && person.name}</p>
          <p> {person && person.birth_year}</p>
          <p> {person && person.eye_color}</p>
      </div>
    </>
  );
}
