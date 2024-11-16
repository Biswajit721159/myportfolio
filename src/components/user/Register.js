import React, { useState } from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import {
	validateEmail,
	validateFullName,
	validatePassword,
} from "../../helpers/fromValidationCheckers";
import { toast } from "react-toastify";
import { register } from "../../utilities/authApi";
import CircularProgress from "@mui/material/CircularProgress";
import FullpageLoader from "../../common/FullpageLoader";

const Register = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const history = useNavigate();

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { fullName, email, password, confirmPassword } = formData;
		if (!validateFullName(fullName)) {
			toast.error("Invalid Full Name");
			return;
		}
		if (!validateEmail(email)) {
			toast.error("Invalid Email");
			return;
		}
		if (!validatePassword(password)) {
			toast.error("Invalid Password");
			return;
		}
		if (password !== confirmPassword) {
			toast.error("Password and Confirm Password are not match");
			return;
		}
		try {
			setLoading(true);
			const response = await register(formData);
			toast.success(response.message);
			history("/Login");
		} catch (e) {
			toast.warn(e?.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<TextField
						label="Full Name"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						fullWidth
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PersonIcon />
								</InputAdornment>
							),
						}}
					/>

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

					<TextField
						label="Confirm Password"
						name="confirmPassword"
						type="password"
						value={formData.confirmPassword}
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
						Register
					</Button>
				</form>
				<p className="text-sm text-gray-600 text-center mt-4">
					Already have an account?{" "}
					<Link to="/Login" className="text-blue-500 hover:underline">
						Login here
					</Link>
				</p>
			</div>
			<FullpageLoader open={loading} />
		</div>
	);
};

export default Register;
