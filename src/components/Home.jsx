import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Contact from  "./Contact";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

const Home = () =>{
    return(
        <React.Fragment>
            <Navbar />
            <div id="hero">
            <Hero />
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="contact">
            <Contact />
            </div>
            <Footer />
        </React.Fragment>
        )
}
export default Home;