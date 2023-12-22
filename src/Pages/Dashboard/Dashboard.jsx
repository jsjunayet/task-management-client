// src/App.js

import axios from 'axios';

import { DndProvider, } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskForm from './TaskForm';
import { useContext, useEffect, useState } from 'react';
import TaskList from './TaskList';
import { AuthControl } from '../../router/AuthProvider';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useContext(AuthControl)
    const [User, setUser] = useState({})

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get(`https://task-mangement-server-dun.vercel.app/tasks?email=${user?.email}`);
            setTasks(response.data);
        };

        fetchTasks();
    }, [user]);
    console.log(tasks);

    const handleTaskAdd = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleTaskDelete = async (taskId) => {
        await axios.delete(`https://task-mangement-server-dun.vercel.app/tasks/${taskId}`);
        setTasks(tasks.filter((task) => task._id !== taskId));
        toast.success("Succefully Deleted")
    };

    const handleTaskStatusChange = async (taskId) => {
        const taskToUpdate = tasks.find((task) => task._id === taskId);
        const newStatus = getNextStatus(taskToUpdate.status);
        const response = await axios.patch(`https://task-mangement-server-dun.vercel.app/tasks/${taskId}`, { status: newStatus });
        const updatedTasks = tasks.map((task) => (task._id === taskId ? response.data : task));
        setTasks(updatedTasks);
    };

    const getNextStatus = (currentStatus) => {
        switch (currentStatus) {
            case 'todo':
                return 'ongoing';
            case 'ongoing':
                return 'completed';
            default:
                return currentStatus;
        }
    };

    useEffect(() => {
        const myuser = async () => {
            const response = await axios.get(`https://task-mangement-server-dun.vercel.app/users?email=${user?.email}`);
            setUser(response.data);
        };

        myuser();
    }, [user]);
    console.log(User);
    return (
        <div className=' bg-gray-900'>
            <DndProvider backend={HTML5Backend}>
                <div className="container  mx-auto p-4">
                    <h1 className="text-3xl font-semibold mb-1 text-center text-white">Task Management Dashboard</h1>
                    <div>
                        <div className='text-center text-white mb-2'>
                            <p className='font-semibold text-xl mb-3'>Welcome {User?.name}</p>
                            <div className="avatar">
                                <div className="w-24 mask mask-squircle">
                                    <img src={User?.img} />
                                </div>
                            </div>
                            <p>Email : {User?.email}</p>
                        </div>
                    </div>
                    <div>

                    </div>
                    <TaskForm onTaskAdd={handleTaskAdd} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <h2 className="text-xl font-semibold bg-rose-500 text-center text-white rounded-lg">To-Do</h2>
                            <TaskList tasks={tasks} onTaskDelete={handleTaskDelete} onTaskStatusChange={handleTaskStatusChange} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold rounded-lg bg-rose-500 text-center text-white">Ongoing</h2>
                            <TaskList tasks={tasks.filter((task) => task.status === 'ongoing')} onTaskDelete={handleTaskDelete} onTaskStatusChange={handleTaskStatusChange} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold rounded-lg bg-rose-500 text-center text-white shadow-lg">Completed</h2>
                            <TaskList tasks={tasks.filter((task) => task.status === 'completed')} onTaskDelete={handleTaskDelete} onTaskStatusChange={handleTaskStatusChange} />
                        </div>
                    </div>
                </div>
            </DndProvider>
        </div>
    );
};

export default Dashboard;
