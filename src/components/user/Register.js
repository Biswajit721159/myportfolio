import React, { useState, useEffect, useRef } from "react";
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
import { gsap } from "gsap";

const Register = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const history = useNavigate();

	// GSAP Refs
	const formContainerRef = useRef(null);
	const titleRef = useRef(null);
	const inputRefs = useRef([]);
	const buttonRef = useRef(null);

	// GSAP Animations
	useEffect(() => {
		const timeline = gsap.timeline();

		// Title animation
		timeline.from(titleRef.current, {
			opacity: 0,
			y: -50,
			duration: 0.8,
			ease: "power3.out",
		});

		// Form animation
		timeline.from(inputRefs.current, {
			opacity: 0,
			y: 50,
			stagger: 0.2,
			duration: 0.6,
			ease: "power3.out",
		});

		// Button animation
		timeline.from(buttonRef.current, {
			opacity: 0,
			scale: 0.8,
			duration: 0.5,
			ease: "elastic.out(1, 0.5)",
		});
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
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
			toast.error("Password and Confirm Password do not match");
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
			<div
				className="w-full max-w-md bg-white p-8 shadow-md rounded-lg"
				ref={formContainerRef}
			>
				<h2
					className="text-2xl font-bold text-center text-gray-800 mb-6"
					ref={titleRef}
				>
					Register
				</h2>
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
						ref={(el) => (inputRefs.current[0] = el)}
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
						ref={(el) => (inputRefs.current[1] = el)}
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
						ref={(el) => (inputRefs.current[2] = el)}
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
						ref={(el) => (inputRefs.current[3] = el)}
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
						ref={buttonRef}
					>
						{loading ? <CircularProgress size={24} /> : "Register"}
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
