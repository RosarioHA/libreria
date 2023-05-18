import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Books from "./Books";
import "../styles/home.css";

function Home() {
    return(
     <>
     <Navbar/>
     <div id="cardContainer">
     <Books />
     </div>
     <Footer />
     </>
    )
};

export default Home;