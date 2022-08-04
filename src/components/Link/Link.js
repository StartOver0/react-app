import './Link.css';

export default function Link(props){
    const {title, url} = props.lnk;    
    return (
        <li><a href = {url}>{title}</a></li>
    );
}