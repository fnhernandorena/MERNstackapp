import PropTypes from "prop-types";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-700 p-2 m-4 text-xl rounded-md flex flex-col justify-around">
      <div className="flex flex-row justify-between items-center pb-1 border-b-2 border-white text-center">
        <h1 className=" font-bold">{task.title}</h1>
        <div className="flex justify-center">
          <Link to={`/tasks/${task._id}`} className="bg-sky-600 rounded px-1 mx-1 duration-300 hover:bg-black">
            Edit
          </Link>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
            className="bg-sky-600 rounded px-1 mx-1 duration-300 hover:bg-black"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-zinc-200">{task.description}</p>
      <p >
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
