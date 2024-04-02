import PropTypes from "prop-types";
import { useTraining } from "../context/TrainingContext";
import { Link } from "react-router-dom";

function TrainingCard({ training }) {
  const { deleteTraining } = useTraining();
  return (
    <div className="bg-black p-2 m-4 text-xl rounded-md flex flex-col justify-around">
      <div className="flex flex-row justify-between items-center pb-1 border-b-2 border-white text-center">
        <h1 className=" font-bold">{training.date &&
          new Date(training.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</h1>
        <div className="flex justify-center">
          <Link
            to={`/training/${training._id}`}
            className="bg-sky-600 rounded px- w-24 mx-1 duration-300 hover:bg-black"
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
      <ul className="flex flex-row gap-2">
      {training.chest && <li className="text-2xl text-sky-300">
         | Chest |
        </li>}
      {training.back && <li className="text-2xl text-sky-300">
        | Back |
        </li>}
      {training.legs && <li className="text-2xl text-sky-300">
        | Legs |
        </li>}
      {training.biceps && <li className="text-2xl text-sky-300">
       | Biceps |
        </li>}
      {training.triceps && <li className="text-2xl text-sky-300">
       | Triceps |
        </li>}
      {training.shoulders && <li className="text-2xl text-sky-300">
       | Shoulders |
        </li>}</ul>
      <div className="text-zinc-200">{training.description}</div>
    </div>
  );
}

export default TrainingCard;

TrainingCard.propTypes = {
  training: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    chest: PropTypes.bool.isRequired,
    back: PropTypes.bool.isRequired,
    legs: PropTypes.bool.isRequired,
    biceps: PropTypes.bool.isRequired,
    triceps: PropTypes.bool.isRequired,
    shoulders: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
