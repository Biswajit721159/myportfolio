import { Typography } from '@mui/material';
import { workExperiences } from '../utilities/workExp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const WorkingExp = () => {

    const openProjectName = () => {
        window.open('https://zinterview.ai/', '_blank');
    }

    const openCompany = () => {
        window.open('https://www.riktam.com/', '_blank');
    }

    return (
        <section id="workExperience" className="container mx-auto my-10 p-6 text-center bg-gray-100">
            <Typography variant="h5" className="font-bold border-2 border-gray-500 inline-block p-2 rounded-r-md">
                Work Experience
            </Typography>
            <div className="space-y-6 mt-5 text-left">
                {workExperiences.map((exp, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <p className="font-semibold text-gray-800">
                            {exp.jobTitle} - <span className="text-blue-500 cursor-pointer" onClick={() => openCompany()}>{exp.company}</span>
                        </p>
                        <p className="text-gray-500 mb-2 mt-2">
                            {exp.duration}
                        </p>

                        <p className="text-gray-700 font-semibold mt-3">
                            Project: <strong className='text-blue-500 cursor-pointer' onClick={() => openProjectName()}>{exp.projectName}</strong>
                        </p>

                        <div className="mt-2 flex items-start">
                            <p className="text-gray-600 font-bold mt-1">Tech Stacks:</p>
                            <div className="flex flex-wrap gap-2 mx-2">
                                {exp.techStacks.map((tech, idx) => (
                                    <span key={idx} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-600 font-bold">Key Tasks:</p>
                            <ul className="space-y-3 mt-2">
                                {exp?.tasks?.map((task, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <FiberManualRecordIcon sx={{ fontSize: '8px', marginTop: '6px', color: 'gray' }} />
                                        <div className="ml-2">
                                            <p className="text-gray-700 font-semibold">
                                                {task.title}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                - {task.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkingExp;
