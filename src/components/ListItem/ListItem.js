import './ListItem.css';

export default function ListItem(props){
    const {ref, title, txt} = props.data;

    return (
        <li className='listitem' data-ref={ref} key = {ref}> 
            <h2 className='title'> {title}</h2>
            {txt && <p>{txt}</p>}
        </li>
    )
}