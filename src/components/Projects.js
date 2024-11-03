import { Card, CardContent, Typography } from '@mui/material';
import { projects, claName } from '../utilities/project';
const Projects = () => {
    const viewMore = (url) => {
        window.open(url, '_blank');
    }
    return (
        <section id="projects" className="container mx-auto my-10 p-6 text-center ">
            <Typography variant="h5" className="font-bold">Projects</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    projects.map((data, index) => (
                        <Card key={index}>
                            <CardContent>
                                <h4 className="font-semibold ">{data.name}</h4>
                                <p className="my-2 mt-5 text-sm">
                                    {data.description}
                                </p>
                                <button
                                    className={claName}
                                    onClick={() => viewMore(data.url)}
                                >
                                    View More
                                </button>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}
export default Projects;