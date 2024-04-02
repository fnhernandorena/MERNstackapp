import { useForm } from "react-hook-form";
import { useBadHabits } from "../context/BadHabitContex";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function BadHabitFormPage() {
  const { handleSubmit, register, setValue } = useForm();
  const { createBadHabit, getBadHabit, updateBadHabit } = useBadHabits();
  const navigate = useNavigate();
  const params = useParams();

  let timesArr = [];

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getBadHabit(params.id);
        setValue("title", task.title);
        timesArr = task.times
      }
    }
    loadTask();
  }, [params.id, getBadHabit, setValue]);

  const onSubmit = handleSubmit(async(data) => {
    if (params.id) {
        timesArr.push(parseInt(data.times))
         updateBadHabit(params.id, { ...data, times: timesArr });
    } else {
      timesArr.push(parseInt(data.times))
     createBadHabit({ ...data, times: timesArr });
    }
    navigate("/badhabits");
  });
  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="flex flex-col w-96">
        <h2 className="text-3xl font-bold mb-2">Bad habit!</h2>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
        />
        <input
          type="number"
          placeholder="Times"
          {...register("times")}
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
        />
        <button className="w-full bg-sky-600 mt-2 p-2 rounded-xl hover:bg-black duration-300">Save</button>
      </form>
    </div>
  );
}

export default BadHabitFormPage;
