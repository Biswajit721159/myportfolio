import { Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Education = () => {

    const educations = [
        {
            'instituteName': 'Jalpaiguri Government Engineering College',
            'marks': 'CGPA : 8.73/10',
            'degree': 'Bachelor of Technology(Electronics and Communication Engineering)',
            'duration': '2019 - 2023',
        },
        {
            'instituteName': 'Rohini C.R.D High school',
            'marks': 'Secured : 88 percent',
            'degree': 'Higher Secondary Education (Science)',
            'duration': '2017 - 2019',
        },
        {
            'instituteName': 'Rohini C.R.D High school',
            'marks': 'Secured : 82 percent',
            'degree': 'Secondary Education',
            'duration': '2015 - 2017',
        }
    ]

    return (
        <div id="education" className="container mx-auto my-10 p-6 text-center border-1 border-blue-500">
            <Typography variant="h5" className="font-bold border-2 border-gray-500 inline-block p-2 rounded-r-md">Educations</Typography>
            <div className="space-y-6 mt-5 text-left p-4 bg-gray-100 rounded-lg shadow-md">
                {
                    educations.map((el, index) => (
                        <div className="" key={index}>
                            <div className="flex justify-between">
                                <div className="flex gap-1 text-gray-600">
                                    <FiberManualRecordIcon sx={{ fontSize: '8px', marginTop: '6px', color: 'gray' }} />
                                    <p className="font-bold">{el.instituteName}</p>
                                </div>
                                <p className="font-bold text-gray-600">{el.marks}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-gray-600"> - {el.degree}</p>
                                <p className="text-sm text-gray-600">{el.duration}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Education;