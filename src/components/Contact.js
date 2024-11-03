import { Button, TextField, Typography } from '@mui/material';
const Contact = () => {
    return (
        <section id="contact" className="bg-gray-200 py-3">
            <div className="container mx-auto p-3 text-center">
                <Typography variant="h5" className="font-bold border-2 border-gray-500 inline-block p-2 rounded-r-md">Message Me</Typography>
                <form className="max-w-md mx-auto mt-5 space-y-4">
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                        size='small'
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        size='small'
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        size='small'
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>Send Message</Button>
                </form>
            </div>
        </section>
    )
}
export default Contact;