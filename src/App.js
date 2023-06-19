 import React from "react";
 import './App.css'

import Nav from "./component/navbar/Nav.jsx";
import Maines from "./component/main/manes";

import Footers from "./component/footer/Footer";
import HomeP from "./component/Home/Homes.jsx";
 const App= ()=> {
    return(
        <>
        <Nav/>
        <HomeP/>
        <Maines/>
        <Footers/>



        </>
    )
 }
 export default App