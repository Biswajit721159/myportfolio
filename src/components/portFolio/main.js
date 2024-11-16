import React, { useState } from "react";

const PortfolioCreator = () => {
	const [formData, setFormData] = useState({
		name: "",
		bio: "",
		skills: "",
		projects: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
			<h1 className="text-2xl font-bold mb-6 text-gray-800 sticky z-10">Create Your Portfolio</h1>
			<div className="flex w-full max-w-5xl space-x-8 overflow-y-auto mt-4">
				{/* Form Section */}
				<div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-4 text-gray-700">Portfolio Details</h2>
					<form className="space-y-4">
						{/* Name */}
						<div>
							<label className="block text-gray-700 font-medium mb-2">Name</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Enter your name"
								className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						{/* Bio */}
						<div>
							<label className="block text-gray-700 font-medium mb-2">Bio</label>
							<textarea
								name="bio"
								value={formData.bio}
								onChange={handleChange}
								placeholder="Write a short bio about yourself"
								rows="4"
								className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							></textarea>
						</div>

						{/* Skills */}
						<div>
							<label className="block text-gray-700 font-medium mb-2">Skills</label>
							<input
								type="text"
								name="skills"
								value={formData.skills}
								onChange={handleChange}
								placeholder="E.g., JavaScript, React, Node.js"
								className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						{/* Projects */}
						<div>
							<label className="block text-gray-700 font-medium mb-2">Projects</label>
							<textarea
								name="projects"
								value={formData.projects}
								onChange={handleChange}
								placeholder="List your projects separated by commas"
								rows="3"
								className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							></textarea>
						</div>
					</form>
				</div>

				{/* Preview Section */}
				<div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-4 text-gray-700">Portfolio Preview</h2>
					<div className="space-y-4">
						{/* Name */}
						<div>
							<h3 className="text-lg font-bold text-gray-800">Name:</h3>
							<p className="text-gray-600">{formData.name || "Your Name"}</p>
						</div>

						{/* Bio */}
						<div>
							<h3 className="text-lg font-bold text-gray-800">Bio:</h3>
							<p className="text-gray-600">{formData.bio || "Write a short bio here"}</p>
						</div>

						{/* Skills */}
						<div>
							<h3 className="text-lg font-bold text-gray-800">Skills:</h3>
							<p className="text-gray-600">{formData.skills || "List your skills here"}</p>
						</div>

						{/* Projects */}
						<div>
							<h3 className="text-lg font-bold text-gray-800">Projects:</h3>
							<ul className="list-disc list-inside text-gray-600">
								{formData.projects
									? formData.projects
											.split(",")
											.map((project, index) => <li key={index}>{project.trim()}</li>)
									: "List your projects here"}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCreator;
