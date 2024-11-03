import { useNavigate } from "react-router-dom";

const Header = () => {
    const history = useNavigate();
    return (
        <header className="bg-blue-600 text-white p-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 onClick={() => history('/')} className="text-xl font-bold cursor-pointer">MyPortfolio</h1>
                <nav className="space-x-6">
                    <a href="#about" className="text-white hover:text-blue-200 transition duration-200">About</a>
                    <a href="#workExperience" className="text-white hover:text-blue-200 transition duration-200">Work Experience</a>
                    <a href="#projects" className="text-white hover:text-blue-200 transition duration-200">Projects</a>
                    <a href="#contact" className="text-white hover:text-blue-200 transition duration-200">Contact</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;
