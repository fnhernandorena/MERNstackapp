import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0)
    return (
      <div className="flex p-1 flex-col">
        <Link
          to="/add-task"
          className="w-full hover:bg-black duration-300 bg-sky-600 p-1 text-xl font-bold  text-center  rounded-xl"
        >
          Add task
        </Link>
        <h1>No tasks!</h1>
      </div>
    );

  return (
    <div className="flex p-1 flex-col">
      <Link
        to="/add-task"
        className="w-full bg-sky-600 p-1 text-xl font-bold  text-center  rounded-xl"
      >
        Add task
      </Link>
      <div className="md:grid-cols-2 grid lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
