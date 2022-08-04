import List from '../List/List';
import './SearchHistory.css';

export default function SearchHistory(props){

    const formattedData = props.Terms.map((item, index) => (
        {
            ref: index, 
            title: item, 
            txt: null
        }
    ))

    return (
        <List Results = {formattedData}/>
    )
}