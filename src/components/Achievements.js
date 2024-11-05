import { Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Achievements = () => {
    const Achievements = [
        'Solved 1200+ problems over Leetcode.',
        'Knight(Max Rating 1862) And Top 5.5 percentage in Leetcode.',
        'Secured Global rank of 807 in Leetcode Biweekly Contest 62.',
        'Secured rank of 468 among 1170 teams in ICPC Gwalior-Pune 2020 Regional Round.',
    ]
    return (
        <section id="Achievements" className="container mx-auto my-10 p-6 text-center border-1 border-blue-500">
            <Typography variant="h5" className="font-bold border-2 border-gray-500 inline-block p-2 rounded-r-md">Achievements</Typography>
            <div className="space-y-6 mt-5 text-left p-4 bg-gray-100 rounded-lg shadow-md">
                {
                    Achievements.map((el, index) => (
                        <div key={index} className="flex items-start" >
                            <FiberManualRecordIcon sx={{ fontSize: '10px', marginTop: '6px', color: 'gray' }} />
                            <div className="ml-2">
                                <p className="text-gray-600">
                                    {el}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}
export default Achievements;