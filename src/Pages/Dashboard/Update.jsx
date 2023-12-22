import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";


const Update = () => {
    const navigate = useNavigate()
    const taskid = useLoaderData()
    const handleFormSubmit = async (data) => {
        const title = data.title
        const description = data.description
        const deadline = data.deadline
        const priority = data.priority
        const updatedata = { title, description, deadline, priority }
        const res = await axios.put(`https://task-mangement-server-dun.vercel.app/update/${taskid._id}`, updatedata)
        if (res.data.modifiedCount) {
            toast.success("Succsfully modifier")
            navigate('/dashboard')
        }
        reset()
    }
    const { register, handleSubmit, reset } = useForm();
    return (
        <div className=" bg-gray-900 flex flex-col justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit(handleFormSubmit)} className="mb-6 w-full  mx-auto md:w-8/12 my-10 text-white p-6 rounded-lg shadow-md">
                <label className="block mb-4">
                    <span className="text-white">Title:</span>
                    <input {...register('title', { required: true })} defaultValue={taskid?.title} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" />
                </label>
                <label className="block mb-4">
                    <span className="text-white">Description:</span>
                    <textarea {...register('description')} defaultValue={taskid?.description} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" />
                </label>
                <label className="block mb-4">
                    <span className="text-white">Deadline:</span>
                    <input type="date" {...register('deadline')} defaultValue={taskid?.deadline} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" />
                </label>
                <label className="block mb-4">
                    <span className="text-white">Priority:</span>
                    <select {...register('priority')} defaultValue={taskid?.priority} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    update Task
                </button>
            </form>
        </div>

    );
};

export default Update;