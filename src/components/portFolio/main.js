import React from "react";
import Introduction from "./subComponent/Introduction";
import WorkExperience from "./subComponent/WorkExperience";
import Educations from "./subComponent/Educations";
import Projects from "./subComponent/Projects";
const PortfolioCreator = () => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-100 p-8">
			<h1 className="text-2xl font-bold mb-6 text-gray-800 sticky z-10 text-center">
				Create Your Portfolio
			</h1>
			<Introduction />
			<WorkExperience />
			<Educations />
			<Projects />
		</div>
	);
};

export default PortfolioCreator;
