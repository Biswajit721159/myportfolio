import { useState } from "react";
import { Box, TextField } from "@mui/material";
const Introduction = () => {
	const [introduction, setIntoduction] = useState("");
	const onChangeIntroduction = (e) => {
		setIntoduction(e.target.value);
	};
	return (
		<Box className="shadow-lg p-5">
			<h2 className="text-center">About Me</h2>
			<TextField
				value={introduction}
				onChange={onChangeIntroduction}
				label="*Intoduction"
				className="w-1/2"
			/>
		</Box>
	);
};
export default Introduction;
