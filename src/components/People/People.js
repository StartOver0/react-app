import './People.css';
import {NavLink} from 'react-router-dom';

export default function People({list}){

  //  console.log(list);
  return(
      <div>
        <h2>List of people</h2>
      {list.length === 0 && <p> No Person</p> }
      {list.map((person, index) => (
        <p key = {index}>
          <NavLink className={({isActive}) => (isActive ? "active-style" : null)} to={`/people/${index+1}`}>
            {person.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
}
