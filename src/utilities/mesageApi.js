const api = process.env.REACT_APP_API

const sendMessage = async (messageData) => {
    try {
        const response = await fetch(`${api}/Message/createMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error(e?.message);
    }
};

const deleteMessage = async (id) => {
    try {
        const userinfo = JSON.parse(localStorage.getItem('user'));
        const response = await fetch(`${api}/Message/deleteMessage/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userinfo.auth}`
            }
        });
        const data = await response.json();
        return data;
    }
    catch (e) {
        throw new Error(e?.message);
    }
};

const fetchMessages = async () => {
    try {
        const userinfo = JSON.parse(localStorage.getItem('user'))
        const response = await fetch(`${api}/Message/fetchMessage`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userinfo.auth}`
            }
        });
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error(e?.message);
    }
}

export { sendMessage, deleteMessage, fetchMessages }