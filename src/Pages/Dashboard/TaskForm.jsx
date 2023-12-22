import axios from "axios";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { AuthControl } from "../../router/AuthProvider";
const TaskForm = ({ onTaskAdd }) => {
    const { user } = useContext(AuthControl)
    const { register, handleSubmit, reset } = useForm();
    const handleFormSubmit = async (data) => {
        const email = user?.email
        const title = data.title
        const description = data.description
        const deadline = data.deadline
        const priority = data.priority
        const status = "todo"
        const taskdata = { email, title, description, deadline, priority, status }
        const response = await axios.post('https://task-mangement-server-dun.vercel.app/tasks', taskdata);
        onTaskAdd(response.data);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="mb-6 mx-auto md:w-8/12 w-full bg-white p-6 rounded-lg shadow-md">
            <label className="block mb-4">
                <span className="text-gray-700">Title:</span>
                <input {...register('title', { required: true })} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Description:</span>
                <textarea {...register('description')} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Deadline:</span>
                <input type="date" {...register('deadline')} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Priority:</span>
                <select {...register('priority')} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
            </label>
            <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Add Task
            </button>
        </form>
    );
};
export default TaskForm