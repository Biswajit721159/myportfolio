import { Typography } from '@mui/material';

const workExperiences = [
    {
        jobTitle: 'Software Development Engineer',
        company: 'Tech Solutions Inc.',
        duration: 'Jan 2020 - Present',
        description: 'Worked on developing scalable web applications and optimizing code for performance. Collaborated closely with product and design teams to create efficient user experiences.',
    },
    {
        jobTitle: 'Frontend Developer',
        company: 'Web Creatives',
        duration: 'Jun 2018 - Dec 2019',
        description: 'Focused on building responsive user interfaces with modern frameworks. Improved page load times and implemented new features to enhance user engagement.',
    },
    {
        jobTitle: 'Intern',
        company: 'Startup Hub',
        duration: 'Jan 2018 - May 2018',
        description: 'Assisted with various development tasks, including debugging and UI improvements. Gained experience with agile methodologies and teamwork in a startup environment.',
    },
];

const WorkingExp = () => {
    return (
        <section className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
            <Typography variant="h5" className="text-2xl font-bold mb-6 text-center text-blue-600">
                Work Experience
            </Typography>
            <div className="space-y-6">
                {workExperiences.map((exp, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <Typography variant="h6" className="font-semibold text-gray-800">
                            {exp.jobTitle} - <span className="text-blue-500">{exp.company}</span>
                        </Typography>
                        <Typography variant="body2" className="text-gray-500 mb-2">
                            {exp.duration}
                        </Typography>
                        <Typography variant="body1" className="text-gray-700">
                            {exp.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkingExp;
