import { useEffect } from "react";
import { useTraining } from "../context/TrainingContext";
import TrainingCard from "../components/TrainingCard";
import { Link } from "react-router-dom";

function TrainingsPage() {
  const { getTrainings, trainings } = useTraining();

  useEffect(() => {
    getTrainings();
  }, []);

  if (trainings.length === 0)
    return (
      <div className="flex p-1 flex-col">
        <Link
          to="/add-training"
          className="w-full hover:bg-black duration-300 bg-sky-600 p-1 text-xl font-bold  text-center  rounded-xl"
        >
          Add training
        </Link>
        <h2 className="text-3xl font-bold p-6">No trainings!</h2>
      </div>
    );

  return (
    <div className="flex p-1 flex-col">
      <Link
        to="/add-training"
        className="w-full hover:bg-black duration-300 bg-sky-600 p-1 text-xl font-bold  text-center  rounded-xl"
      >
        Add training
      </Link>{" "}
      <div className="grid lg:grid-cols-2">
        {trainings.map((training) => (
          <TrainingCard training={training} key={training._id} />
        ))}
      </div>
    </div>
  );
}

export default TrainingsPage;
