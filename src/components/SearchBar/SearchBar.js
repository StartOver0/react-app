import './SearchBar.css';

export default function SearchBar(props){

    function submitted(e){
        e.preventDefault();
        console.log('submitted');
        props.addTerm(e.target['SearchText'].value);
    }
    
    return (
        <section className='SearchSection'>
            <form onSubmit={submitted}>
                <input type ="text" name = 'SearchText'></input>
                <button > Search  </button>
                {props.Term && <p className='DisplayText'>You searched for {props.Term} </p>}
                {/* or {props.Term? <p className='DisplayText'>You searched for {props.Term}</p>: ""} */}
            </form>
            
        </section>
    )
}