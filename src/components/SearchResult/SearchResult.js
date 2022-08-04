import './SearchResult.css';
import List from '../List/List';

export default function SearchResult(props){
    let {Results, Type} = props;

    const formattedData = Results.map((item, index) => {
        let obj = {};
        switch(Type){
            case 'films': 
                obj.ref = index+1;
                obj.title = item.title;
                obj.txt = item.release_date;
                break;
            default:
                obj.ref = "random";
                obj.title = 'No Title';
                obj.txt = "Unknown";
        }
        return obj;
    })

    return (
        <List Results = {formattedData}/>
    )
}