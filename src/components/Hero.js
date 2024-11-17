import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import leetcode from "../images/leetcode.png";
import hackerRank from "../images/hackerRank.webp";
import GeeksForGeeks from "../images/GeeksForGeeks.jpeg";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import RenderName from "./RenderName";
const Hero = () => {
	const openLinked = () => {
		window.open("https://www.linkedin.com/in/biswajit-ghosh-21a415209", "_blank");
	};
	const openGithub = () => {
		window.open("https://github.com/Biswajit721159", "_blank");
	};
	const openLeetcode = () => {
		window.open("https://leetcode.com/u/biswajit2329/", "_blank");
	};
	const openResume = () => {
		window.open(
			"https://drive.google.com/file/d/1DgX1toI6U4Tf_eZ6pZuD-WTJB0-XBXRz/view?usp=sharing",
			"_blank"
		);
	};
	const opneGeeksForGeeks = () => {
		window.open("https://auth.geeksforgeeks.org/user/bg5050525/practice", "_blank");
	};

	const openHackerRank = () => {
		window.open("https://www.hackerrank.com/profile/bg5050525", "_blank");
	};

	return (
		<section className="bg-hero-pattern bg-cover bg-center min-h-[50vh] flex items-center justify-center text-center text-white bg-blue-500">
			<div className="bg-opacity-40 p-10 rounded-lg">
				<Typography variant="h4" className="font-bold flex justify-center">
					<WavingHandIcon className="text-yellow-300 mt-2 mx-2" />
					<RenderName />
				</Typography>
				<div className="flex justify-evenly mt-10 flex-wrap">
					<button className="mx-4 mt-2" onClick={openLinked}>
						<LinkedInIcon fontSize="small" /> LinkedIn
					</button>
					<button className="mx-4 mt-2" onClick={openGithub}>
						<GitHubIcon fontSize="small" /> GitHub
					</button>
					<button className="mx-4 mt-2" onClick={openLeetcode}>
						<div className="flex">
							<img src={leetcode} className="w-4 h-4 rounded-md mt-1 mx-1" />
							LeetCode
						</div>
					</button>
					<button className="mx-4 mt-2" onClick={opneGeeksForGeeks}>
						<div className="flex">
							<img src={GeeksForGeeks} className="w-4 h-4 rounded-md mt-1 mx-1" />
							GeeksForGeeks
						</div>
					</button>
					<button className="mx-4 mt-2" onClick={openHackerRank}>
						<div className="flex">
							<img src={hackerRank} className="w-4 h-4 rounded-md mt-1 mx-1" />
							HackerRank
						</div>
					</button>
					<button className="mx-4 mt-2" onClick={openResume}>
						<FileOpenIcon fontSize="small" /> Resume
					</button>
				</div>
			</div>
		</section>
	);
};
export default Hero;
