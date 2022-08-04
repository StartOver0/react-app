import './Header.css'
import Nav from '../Nav/Nav';

export default function Header(props){
    let name = props.company;

    return (
        <header className="vanu">
            <h1>{name}</h1>
            <Nav />
        </header> 
    );
}