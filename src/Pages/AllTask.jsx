import axios from 'axios';
import { useEffect, useState } from 'react';

const AllTask = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const mytaks = async () => {
            const response = await axios.get(`http://localhost:5000/alltasks`);
            setTasks(response.data);
        };
        mytaks();
    }, []);
    return (
        <div className="bg-gray-100 my-10">
            <div className="container mx-auto py-10">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">ALL Tasks</h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xl font-semibold uppercase">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xl font-semibold uppercase">
                                    description
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xl font-semibold uppercase">
                                    deadline
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xl font-semibold uppercase">
                                    priority
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks?.map((item) => (
                                <tr key={item._id}>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <p className="text-gray-900 text-lg">{item?.title}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <p className="text-gray-900 text-lg">{item?.description}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <p className="text-gray-900 text-lg">{item?.deadline}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <p className="text-gray-900 text-lg">{item?.priority}</p>
                                    </td>
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