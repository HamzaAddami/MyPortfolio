import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import { BrowserRouter } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <div>
                <Navbar />
            </div>
                <Hero/>
            <div id="about">
                <About/>
            </div>
        </div>
        )
}
export default Home;