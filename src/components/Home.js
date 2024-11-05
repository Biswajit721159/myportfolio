import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import WorkingExp from './WorkingExp'
import Achievements from './Achievements'
const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <WorkingExp />
            <Projects />
            <Achievements />
            <Contact />
            <Footer />
        </>
    )
}
export default Home;