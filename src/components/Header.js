const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">MyPortfolio</h1>
                <nav className="space-x-4">
                    <a href="#about" className="text-white hover:text-blue-200 transition duration-200">About</a>
                    <a href="#projects" className="text-white hover:text-blue-200 transition duration-200">Projects</a>
                    <a href="#contact" className="text-white hover:text-blue-200 transition duration-200">Contact</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;
