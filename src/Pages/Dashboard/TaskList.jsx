import Task from "./Task";


const TaskList = ({ tasks, onTaskDelete, onTaskStatusChange, onTaskUpdate }) => {
    return (
        <div>
            {tasks?.map((task) => (
                <Task key={task._id} task={task} onTaskDelete={onTaskDelete} onTaskStatusChange={onTaskStatusChange} onTaskUpdate={onTaskUpdate} />
            ))}
        </div>
    );
};
export default TaskList