import React, { useState } from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../helpers/fromValidationCheckers";
import { toast } from "react-toastify";
import FullpageLoader from "../../common/FullpageLoader";
import { forgotPassword } from "../../utilities/authApi";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState("");
	const history = useNavigate();

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			toast.error("Invalid Email");
		}
		try {
			setLoading(true);
			const baseUrl = `${window.location.protocol}//${window.location.host}`;
			const response = await forgotPassword({ email, baseUrl });
			toast.success(response?.message);
			history("/Login");
		} catch (e) {
			toast.warn(e?.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-7 shadow-md rounded-lg">
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
				<p className="text-gray-600 text-center mb-8">
					Enter your email to receive a password reset link.
				</p>
				<form onSubmit={handleSubmit} className="space-y-6">
					<TextField
						label="Email"
						name="email"
						value={email}
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
						Send Reset Link
					</Button>
				</form>
				<p className="text-sm text-gray-600 text-center mt-4">
					Back to{" "}
					<Link to="/login" className="text-blue-500 hover:underline">
						Login
					</Link>
				</p>
			</div>
			<FullpageLoader open={loading} />
		</div>
	);
};

export default ForgotPassword;
