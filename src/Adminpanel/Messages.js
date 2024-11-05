import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteMessage, fetchMessages } from "../utilities/mesageApi";
import { messagesmethod } from '../redux/messageSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { usermethod } from "../redux/userSlice";

const Messages = () => {
    const userinfo = useSelector((state) => state.userAuth.user);
    const messages = useSelector((state) => state.messages.messages);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        try {
            setLoading(true);
            let data = await fetchMessages();
            dispatch(messagesmethod.AddMessage(data.data));
        } catch (e) {
            toast.warn(e.message);
            dispatch(usermethod.Logout_User());
            navigate('/Login');
        } finally {
            setLoading(false);
        }
    };

    const deleteMess = async (id) => {
        try {
            let data = await deleteMessage(id);
            dispatch(messagesmethod.DeleteMessage(id));
            toast.success(data.message);
        } catch (e) {
            toast.warn(e.message);
            dispatch(usermethod.Logout_User());
            navigate('/Login');
        }
    }

    useEffect(() => {
        if (!userinfo) {
            navigate('/Login');
        } else {
            loadData();
        }
    }, []);

    return (
        <div className="container mx-auto my-5 p-6 bg-gray-100">
            <h1 className="text-2xl font-bold text-center mb-6">Messages</h1>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <table className="table-auto w-full bg-white text-sm text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b text-center">Name</th>
                            <th className="py-2 px-4 border-b  text-center">Email</th>
                            <th className="py-2 px-4 border-b  text-center">Message</th>
                            <th className="py-2 px-4 border-b  text-center">Date</th>
                            <th className="py-2 px-4 border-b  text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages && messages?.map((msg, index) => (
                            <tr key={msg._id} className="text-center border-b">
                                <td className="py-2 px-4 border-b  text-center">{msg.name}</td>
                                <td className="py-2 px-4 border-b  text-center">{msg.email}</td>
                                <td className="py-2 px-4 border-b  text-center">{msg.message}</td>
                                <td className="py-2 px-4 border-b  text-center">
                                    {new Date(msg.createdAt).toLocaleDateString()}
                                </td>
                                <td className="py-2 px-4 border-b  text-center">
                                    <DeleteIcon className="cursor-pointer text-red-500" onClick={() => deleteMess(msg._id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Messages;
