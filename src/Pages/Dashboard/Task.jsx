import { useDrag, useDrop } from "react-dnd";
import { Link } from "react-router-dom";


const Task = ({ task, onTaskDelete, onTaskStatusChange, }) => {

    const [, drag] = useDrag({
        type: 'TASK',
        item: { id: task._id },
    });

    const [, drop] = useDrop({
        accept: 'TASK',
        drop: () => onTaskStatusChange(task._id),
    });

    return (
        <div ref={(node) => drag(drop(node))} className="bg-white  p-6 rounded-lg shadow-md mt-4 mx-5">
            <h3 className="text-xl font-semibold mb-2">{task?.title}</h3>
            <p className="text-gray-700 mb-2">{task?.description}</p>
            <div className=" flex justify-between items-center">
                <p className="text-gray-700">Deadline: {task?.deadline}</p>
                <p className="text-gray-700">Priority: {task?.priority}</p>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={() => onTaskDelete(task?._id)}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                >
                    Delete
                </button>
                <Link
                    to={`/dashboard/${task._id}`} d
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                >
                    Update
                </Link>
            </div>
        </div>
    );
};
export default Task