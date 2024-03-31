import { useEffect } from "react";
import { useBadHabits } from "../context/BadHabitContex";
import { Link } from "react-router-dom";
import BadHabitsChart from "../components/BadHabitsChart";

function BadHabitPage() {
  const { getBadHabits, deleteBadHabit, badhabits } = useBadHabits();

  useEffect(() => {
    getBadHabits();
  }, []);

  if (badhabits.length === 0)
    return (
      <div className="flex p-1 flex-col">
        <Link
          to="/add-badhabit"
          className="w-full bg-sky-600 p-1 text-xl font-bold  text-center  rounded-xl"
        >
          Add bad habit
        </Link>
        <h1>No bad habits!</h1>
      </div>
    );

  return (
    <div className="flex p-1 flex-col">
      <Link
        to="/add-badhabit"
        className="w-full hover:bg-black duration-300 bg-sky-600 p-1 text-xl font-bold  text-center  rounded-xl"
      >
        Add bad habit
      </Link>
      <div className="">
        {badhabits.map((badHabit) => (
          <div className="my-2 p-2 bg-black rounded-lg" key={badHabit._id}><div className="flex flex-row justify-between items-center pb-1 border-b-2 border-white text-center">
          <h1 className="text-2xl font-bold">{badHabit.title}</h1>
          <div className="flex justify-center">
            <Link
              to={`/badhabits/${badHabit._id}`}
              className="bg-sky-600 rounded px-1 mx-1 duration-300 hover:bg-black w-24"
            >
              Add
            </Link>
            <button
              onClick={() => {
                deleteBadHabit(badHabit._id);
              }}
              className="bg-sky-600 rounded px-3 mx-1 duration-300 hover:bg-black"
            >
              Delete
            </button>
          </div>
        </div>
            <BadHabitsChart badHabit={badHabit}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BadHabitPage;
