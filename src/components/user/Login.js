import React, { useEffect, useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../helpers/fromValidationCheckers";
import { toast } from "react-toastify";
import { login } from "../../utilities/authApi";
import FullpageLoader from "../../common/FullpageLoader";
import { useDispatch, useSelector } from "react-redux";
import { usermethod } from "../../redux/userSlice";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});
	const dispatch = useDispatch();
	
	const navigate = useNavigate();
	const user = useSelector((state) => state.userAuth.user);
	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user]);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password, rememberMe } = formData;
		if (!validateEmail(email)) {
			toast.error("Invalid Email");
			return;
		}
		if (!validatePassword(password)) {
			toast.error("Invalid Password");
			return;
		}
		try {
			setLoading(true);
			const response = await login(formData);
			dispatch(usermethod.Add_User(response.data));
			navigate(-1);
			toast.success(response?.message);
		} catch (e) {
			toast.warn(e?.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-5 shadow-md rounded-lg">
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<TextField
						label="Email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						fullWidth
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailIcon />
								</InputAdornment>
							),
						}}
					/>

					<TextField
						label="Password"
						name="password"
						type="password"
						value={formData.password}
						onChange={handleChange}
						fullWidth
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							),
						}}
					/>

					<FormControlLabel
						control={
							<Checkbox
								name="rememberMe"
								checked={formData.rememberMe}
								onChange={handleChange}
								color="primary"
							/>
						}
						label="Remember Me"
					/>

					<Button
						type="submit"
						variant="contained"
						fullWidth
						sx={{
							backgroundColor: "#3b82f6",
							"&:hover": { backgroundColor: "#2563eb" },
						}}
						disabled={loading}
					>
						Login
					</Button>
				</form>
				<div className="flex justify-between mt-4">
					<p className="text-sm text-gray-600 text-center">
						Don't have an account?{" "}
						<Link to="/Register" className="text-blue-500 hover:underline">
							Register here
						</Link>
					</p>
					<p className="text-sm text-gray-500 gap-2">
						<Link className="text-blue-500 hover:underline" to={"/ForgotPassword"}>
							ForgotPassword
						</Link>
					</p>
				</div>
			</div>
			<FullpageLoader open={loading} />
		</div>
	);
};

export default Login;
