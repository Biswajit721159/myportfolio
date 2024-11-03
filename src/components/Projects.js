import { Card, CardContent, Typography } from '@mui/material';
import { projects, claName } from '../utilities/project';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckIcon from '@mui/icons-material/Check';
const Projects = () => {
    const viewMore = (url) => {
        window.open(url, '_blank');
    }
    return (
        <section id="projects" className="container mx-auto my-10 p-6 text-center border-1 border-blue-500">
            <Typography variant="h5" className="font-bold border-2 border-gray-500 inline-block p-2 rounded-r-md">Projects</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    projects.map((data, index) => (
                        <Card key={index}>
                            <CardContent>
                                <h4 className="font-semibold "><FiberManualRecordIcon fontSize='small' /> {data.name}</h4>
                                <p className="my-2 mt-5 text-sm">
                                    <CheckIcon fontSize='small' className='text-blue-500' /> {data.description}
                                </p>
                                <PrintTechStack data={data.TechStack || []} />
                                <div className='flex justify-evenly'>
                                    <button
                                        className="mt-5 bg-blue-600 text-white py-1.5 px-5 text-sm rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 shadow-lg transform transition-transform hover:scale-105"
                                        onClick={() => viewMore(data.url)}
                                    >
                                        Visit WebSite
                                    </button>
                                    <button
                                        className="mt-5 bg-blue-600 text-white py-1.5 px-5 text-sm rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 shadow-lg transform transition-transform hover:scale-105"
                                        onClick={() => viewMore(data.gitHubLink)}
                                    >
                                        GitHub Code
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

const PrintTechStack = ({ data }) => {
    return (
        <div className='flex flex-wrap'>
            <p className='text-blue-500 mt-1'>Tech stack- </p>
            {
                data?.map((el, index) => (
                    <p
                        key={index}
                        className='mx-1 p-1 mt-1 text-sm border-2 text-gray-500 border-gray-500 rounded-lg'
                    >
                        {el}
                    </p>
                ))
            }
        </div>
    )
}

export default Projects;