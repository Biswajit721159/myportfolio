import { useNavigate } from "react-router-dom";

const Header = () => {
    const history = useNavigate();
    return (
        <header className="bg-blue-600 text-white p-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 onClick={() => history('/')} className="text-xl font-bold cursor-pointer">MyPortfolio</h1>
                <nav className="space-x-4 flex flex-wrap">
                    <a href="#about" className="text-white hover:text-blue-200 transition duration-200 text-sm">About</a>
                    <a href="#workExperience" className="text-white hover:text-blue-200 transition duration-200 text-sm">Work Experience</a>
                    <a href="#projects" className="text-white hover:text-blue-200 transition duration-200 text-sm">Projects</a>
                    <a href="#Achievements" className="text-white hover:text-blue-200 transition duration-200 text-sm">Achievements</a>
                    <a href="#contact" className="text-white hover:text-blue-200 transition duration-200 text-sm">Contact</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;
