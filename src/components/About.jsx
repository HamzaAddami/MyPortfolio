import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="min-h-screen bg-bg1">
            <h1 className="text-nav text-center font-bold text-4xl pt-24 underline underline-offset-8" id="font">
                About
            </h1>
            <div data-aos="zoom-in-right" className="mx-28 bg-white text-black relative mt-10 text-center border border-black w-96 h-1/2">
                <h2 className="text-2xl font-bold text-nav border-b-2 border-black" id="font">About Me</h2>
                <p className="text-left text-center mt-4">Hello, I'm a 21-year-old web developer currently studying web development at OFPPT. 
                My passion lies in crafting engaging and functional websites. Through my coursework and hands-on experience, I've honed my skills in coding, problem-solving, and creating user-friendly interfaces. I'm excited about the ever-evolving world of web development 
                and eager to contribute my skills to innovative projects.</p>
            </div>
        </div>
    );
};

export default About;
