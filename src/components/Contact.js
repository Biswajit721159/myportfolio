import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { toast } from 'react-toastify';
import { sendMessage } from '../utilities/mesageApi';
const Contact = () => {


    const copyEmail = (Email) => {
        navigator.clipboard.writeText(Email)
            .then(() => {
                toast.success('Email copied to clipboard!')
            })
            .catch(err => {
                toast.error("Failed to copy Email!");
            });
    }

    const copyMobile = (mobile) => {
        navigator.clipboard.writeText(mobile)
            .then(() => {
                toast.success('Mobile number copied to clipboard!')
            })
            .catch(err => {
                toast.error("Failed to copy mobile number!");
            });
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let response = await sendMessage(formData);
            setFormData((prev) => ({
                ...prev,
                name: '',
                email: '',
                message: '',
            }))
            toast.success(response?.message);
        } catch (e) {
            toast.warn(e.message);
        }
        finally {
            setLoading(false)
        }
    };



    return (
        <section id="contact" className="bg-gray-200 py-3">
            <div className="container mx-auto p-3 text-center">
                <div className='flex justify-evenly flex-wrap'>
                    <div>
                        <Typography variant="h6" className="font-bold">Message Me</Typography>
                        <form className="max-w-md mx-auto mt-5 space-y-4" onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                size='small'
                                name='name'
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                size='small'
                                name='email'
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                required
                                size='small'
                                name='message'
                                onChange={handleChange}
                                spellCheck={false}
                                value={formData.message}
                            />
                            <Button disabled={loading} type="submit" variant="contained" color="primary" fullWidth>Send Message</Button>
                        </form>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className=''>
                            <Typography variant="h6" className="font-bold">Contact Info</Typography>
                        </div>
                        <div className='flex space-x-6 items-center mt-20'>
                            <div>
                                <p><MarkunreadIcon fontSize='large' /></p>
                                <p>Email</p>
                                <p className='text-gray-500 cursor-pointer' onClick={() => copyEmail('bg5050525@gmail.com')}>
                                    bg5050525@gmail.com
                                </p>
                            </div>
                            <div>
                                <p><LocalPhoneIcon fontSize='large' /></p>
                                <p>Mobile</p>
                                <p className='text-gray-500 cursor-pointer' onClick={() => copyMobile('+91 6295102811')}>+91 6295102811</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;