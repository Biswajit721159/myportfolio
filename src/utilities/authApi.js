const api = process.env.REACT_APP_API
const login = async (data) => {
    try {
        let response = await fetch(`${api}/Adminpanel/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let res = await response.json();
        return res;
    } catch (e) {
        throw new Error(e?.message);
    }
}

export { login }