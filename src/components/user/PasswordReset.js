import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { toast } from "react-toastify";
import { checkTokenData, savePassword } from "../../utilities/authApi";
import FullpageLoader from "../../common/FullpageLoader";
import { validatePassword } from "../../helpers/fromValidationCheckers";

const PasswordReset = () => {
	const { token } = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [user, setUser] = useState();

	const fetchTokenData = async () => {
		try {
			setLoading(true);
			const response = await checkTokenData(token);
			setUser(response.data);
		} catch (e) {
			toast.warn(e?.message);
			navigate("/404");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchTokenData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validatePassword(password)) {
			toast.error("Invalid Password");
			return;
		}
		if (password !== confirmPassword) {
			toast.error("Password and confirm Password are not same");
			return;
		}
		try {
			const response = await savePassword({ email: user.email, password, token });
			toast.success(response.message);
			navigate("/Login");
		} catch (e) {
			toast.warn(e.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Reset Your Password</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<TextField
						label="New Password"
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
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
					>
						Reset Password
					</Button>
				</form>
			</div>
			<FullpageLoader open={loading} />
		</div>
	);
};

export default PasswordReset;
