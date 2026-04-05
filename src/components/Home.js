import React from 'react';
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import WorkingExp from './WorkingExp';
import Education from './Education';

const Home = () => {
    return (
        <div className="bg-dark-bg min-h-screen text-dark-text font-sans selection:bg-primary/30 selection:text-white">
            <Hero />
            <About />
            <WorkingExp />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;