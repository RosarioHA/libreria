import {useContext} from "react";
import { dataContext } from "./Context";
import "../styles/books.css"

const Books = () => {
    //obtiene 'data' del contexto
    const {data} = useContext(dataContext)
    //metodo .map recorre el array de libros
    return data.map((book) => {
        //crea componente 'card' por cada objeto -libro- encontrado
        return(
            <div id="card">
                <h5>Autor</h5>
                <h3>{book.author}</h3>
                <h5>Titulo</h5>
                <h3>{book.title}</h3>
                <h5>Año</h5>
                <h3>{book.year}</h3>
                <h5>Pais</h5>
                <h3>{book.country}</h3>
            </div>
        )
    })
};

export default Books;