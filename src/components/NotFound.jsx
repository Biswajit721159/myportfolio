import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
            <Typography variant="h1" className="text-6xl font-bold text-blue-600 mb-4">
                404
            </Typography>
            <Typography variant="h5" className="text-2xl font-semibold text-gray-700 mb-4">
                Page Not Found
            </Typography>
            <Typography className="text-gray-500 mb-8">
                Sorry, the page you are looking for doesn’t exist.
            </Typography>
            <span className="text-8xl mb-8">😕</span>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoHome}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Go to Home
            </Button>
        </div>
    );
};

export default NotFound;
