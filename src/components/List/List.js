import './List.css';
import ListItem from '../ListItem/ListItem'; 

export default function List(props){
    
    const {Results} = props;
    return (
        <>
        {Results.length > 0 && <ul className='Results'>
            {props.Results.map((item) => (
                <ListItem data = {item} /> 
            ))}
        </ul>}
        </>
    )
}