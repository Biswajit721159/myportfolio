import { Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const About = () => {
    return (
        <section id="about" className="container mx-auto my-10 p-6 text-center bg-gray-100">
            <Typography variant="h5" className="font-bold border-2 border-gray-500 inline-block p-2 rounded-r-md">
                About Me
            </Typography>
            <p className="mt-5 text-gray-500 flex items-center">
                <DotIcon /> <span className="text-blue-500 ml-1"> Introduction - </span>
                <Introduction />
            </p>
            <p className="mt-5 text-gray-500 flex items-center">
                <DotIcon /><span className="text-blue-500 ml-1"> Programming Languages - </span>
                <Languages />
            </p>
            <p className="mt-5 text-gray-500 flex items-center">
                <DotIcon /> <span className="text-blue-500 ml-1"> Frameworks - </span>
                <Frameworks />
            </p>
            <p className="mt-5 text-gray-500 flex items-center">
                <DotIcon /> <span className="text-blue-500 ml-1"> Other Skills - </span>
                <OtherSkills />
            </p>
        </section>
    );
};

const Introduction = () => {
    return (
        <div className="flex flex-wrap ml-2">
            <p className='text-sm'>
                I am a full-stack Software Development Engineer with a strong passion for problem-solving, particularly through the use of Data Structures and Algorithms.
            </p>
        </div>
    )
}

const Languages = () => {
    const languagesList = [
        { name: 'C' },
        { name: 'C++' },
        { name: 'JavaScript' },
    ];
    return (
        <div className="flex flex-wrap ml-2">
            {languagesList.map((language, index) => (
                <p key={index} className="border-2 p-1 border-gray-300 mx-1 rounded-lg">
                    {language.name}
                </p>
            ))}
        </div>
    );
};

const Frameworks = () => {
    const frameworksList = [
        { name: 'React Js' },
        { name: 'Node Js' },
        { name: 'Express Js' },
        { name: 'Redux Js' },
        { name: 'Tailwind Css' },
        { name: 'MUI' },
        { name: 'React Native' },
        { name: 'Django' },
        { name: 'Bootstrap' }
    ];
    return (
        <div className="flex flex-wrap ml-2">
            {frameworksList.map((framework, index) => (
                <p key={index} className="border-2 p-1 border-gray-300 mx-1 rounded-lg">
                    {framework.name}
                </p>
            ))}
        </div>
    );
};

const OtherSkills = () => {
    const otherSkillsList = [
        'Data Structures and Algorithms',
        'OOPS',
        'Open AI',
        'MongoDB',
        'HTML',
        'CSS',
        'SQL',
        'AWS',
        'Git/GitHub'
    ];
    return (
        <div className="flex flex-wrap ml-2">
            {otherSkillsList.map((skill, index) => (
                <p key={index} className="border-2 p-1 border-gray-300 mx-1 rounded-lg">
                    {skill}
                </p>
            ))}
        </div>
    );
};

const DotIcon = () => {
    return <FiberManualRecordIcon fontSize="small" style={{ fontSize: '10px' }} />;
};

export default About;
