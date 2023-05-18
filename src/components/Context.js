import {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//crea un contexto para almacenar y compartir info entre componentes
export const dataContext = createContext();

const DataProvider = ({children}) => {
    //define estado inicial del componente como un arreglo vacio
    const [data, setData] = useState([]);

    //hook que carga los datos desde el archivo JSON utilizando Axios
    useEffect(() => {
        axios("https://github.com/benoitvallon/100-best-books.git").then((resp) => setData(resp.data))
    }, []);

    //retorna componente envuelto en el contexto, para que sus hijos tengan acceso a la data
    return(
        <dataContext.Provider value={{data}}>
            {children}
        </dataContext.Provider>
    )
};

export default DataProvider;