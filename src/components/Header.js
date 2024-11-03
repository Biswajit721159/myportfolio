import { Button } from '@mui/material';
const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <nav>
                    <Button color="inherit" href="#about">About</Button>
                    <Button color="inherit" href="#projects">Projects</Button>
                    <Button color="inherit" href="#contact">Contact</Button>
                </nav>
            </div>
        </header>

    )
}
export default Header;