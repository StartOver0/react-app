import { createContext, useState, useContext } from "react";

const FavContext = createContext();

function FavProvider(props){
    const shape = {
        type: '', // films, planets, people
        id: 0,    // id of films, or plantes, or person
        data: {}  // the actual object
    }

    const [fav, setFav] = useState(shape);

    function updateFav(type, id, data){
        setFav({type, id, data});
    }

    return <FavContext.Provider value={[fav, updateFav]} {...props} />;
}


function useFav(){
    const context = useContext(FavContext);
    if(!context) throw new Error("Not inside the provider");
    return context;
}

export {FavProvider, useFav};