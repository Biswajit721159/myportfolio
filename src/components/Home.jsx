import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import WorkingExp from './WorkingExp'
const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <WorkingExp/>
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
export default Home;