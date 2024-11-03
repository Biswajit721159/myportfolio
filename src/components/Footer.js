import { Typography } from '@mui/material';
const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white p-4 text-center mt-auto">
            <Typography variant="body2">&copy; {new Date().getFullYear()} My Portfolio - All rights reserved.</Typography>
        </footer>
    )
}
export default Footer;