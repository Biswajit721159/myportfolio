import { useEffect, useState } from "react";

const RenderName = () => {
	const fullName = "Biswajit Ghosh";
	const [index, setIndex] = useState(0);
	const [startToEnd, setStartToEnd] = useState(0);
	const [endToStart, setEndToStart] = useState(fullName.length - 1 || 0);
    const [name, setName] = useState("");
    
	useEffect(() => {
		const interval = setInterval(
			() => {
				if (name.length === fullName.length) {
				}
				setName(fullName.substring(0, index));
				setIndex(index + 1);
			},
			index === 0 ? 1000 : 150
		);
		return () => {
			clearInterval(interval);
			if (index === fullName?.length) {
				setIndex(0);
			}
		};
	}, [index]);
	return (
		<div className="flex">
			<p className="text-gray-600">Hello, My name is </p>
			<p className="mx-1 text-gray-800"> {name}|</p>
		</div>
	);
};
export default RenderName;
