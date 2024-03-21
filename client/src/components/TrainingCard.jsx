import PropTypes from "prop-types";
import { useTraining } from "../context/TrainingContext";
import { Link } from "react-router-dom";

function TrainingCard({ training }) {
  const { deleteTraining } = useTraining();
  return (
    <div className="bg-zinc-700 p-2 m-4 text-xl rounded-md flex flex-col justify-around">
      <div className="flex flex-row justify-between items-center pb-1 border-b-2 border-white text-center">
        <h1 className=" font-bold">{training.title}</h1>
        <div className="flex justify-center">
          <Link
            to={`/training/${training._id}`}
            className="bg-sky-600 rounded px-1 mx-1 duration-300 hover:bg-black"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              deleteTraining(training._id);
            }}
            className="bg-sky-600 rounded px-1 mx-1 duration-300 hover:bg-black"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-zinc-200">{training.description}</p>
      <p>
        {training.date &&
          new Date(training.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </div>
  );
}

export default TrainingCard;

TrainingCard.propTypes = {
  training: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
