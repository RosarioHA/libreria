import React from 'react';
import "../styles/navbar.css";

const Navbar = () => {
    return(
        <nav id="navbar">
            <h1 id="logo"> LIBRERIA </h1>
            <input id="searchInp" placeholder="buscar..."></input>
            <select class="select" name="idioma" id="selector">
                <option value="all">Idioma</option>
                <option value="Italian">Italiano</option>
                <option value="Arabian">Arabe</option>
                <option value="Hebrew">Hebreo</option>
            </select>
        </nav>
    )
};

export default Navbar;