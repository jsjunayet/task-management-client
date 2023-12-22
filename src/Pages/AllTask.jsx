import axios from 'axios';
import { useEffect, useState } from 'react';

const AllTask = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const mytaks = async () => {
            const response = await axios.get(`https://task-mangement-server-dun.vercel.app/alltasks`);
            setTasks(response.data);
        };
        mytaks();
    }, []);
    return (
        <div className="bg-gray-100 my-10">
            <div className="container mx-auto py-10">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">All Tasks</h1>
                <div className="bg-white shadow overflow-x-auto sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xl font-semibold uppercase">Title</th>
                                <th className="hidden md:table-cell px-6 py-3 text-left text-xl font-semibold uppercase">Description</th>
                                <th className="px-6 py-3 text-left text-xl font-semibold uppercase">Deadline</th>
                                <th className="px-6 py-3 text-left text-xl font-semibold uppercase">Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks?.map((item) => (
                                <tr key={item._id}>
                                    <td className="px-6 py-4 md:whitespace-no-wrap">{item?.title}</td>
                                    <td className="hidden md:table-cell px-6 py-4 md:whitespace-no-wrap">{item?.description}</td>
                                    <td className="px-6 py-4 md:whitespace-no-wrap">{item?.deadline}</td>
                                    <td className="px-6 py-4 md:whitespace-no-wrap">{item?.priority}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllTask;