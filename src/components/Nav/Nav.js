import "./Nav.css";
//import Link from "../Link/Link";
import {Link} from 'react-router-dom';

export default function Nav(){
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <Link to="/home">Home</Link>
                <Link to="/films">Films</Link>
                <Link to="/people">People</Link>
            </ul>
        </nav>
    );
}
