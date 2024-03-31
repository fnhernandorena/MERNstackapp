import { useForm } from "react-hook-form";
import { useTraining } from "../context/TrainingContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TrainingFormPage() {
  const { handleSubmit, register, setValue } = useForm();
  const { createTraining, getTraining, updateTraining } = useTraining();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTraining() {
      if (params.id) {
        const training = await getTraining(params.id);
        setValue("description", training.description);
        setValue("chest", training.chest);
        setValue("legs", training.legs);
        setValue("back", training.back);
        setValue("biceps", training.biceps);
        setValue("triceps", training.triceps);
        setValue("shoulders", training.shoulders);
      }
    }
    loadTraining();
  }, [params.id, getTraining, setValue]);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTraining(params.id, data);
    } else {
      createTraining(data);
    }
    navigate("/training");
  });
  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="flex flex-col w-96">
        <h2 className="text-3xl font-bold mb-2">Today`s training!</h2>
        <div className=" p-1 flex justify-between text-xl border-b border-white">
          {" "}
          <label>Chest</label>
          <input
            className="w-6 h-6"
            type="checkbox"
            {...register("chest")}
          />
        </div>
        <div className=" p-1 flex justify-between text-xl border-b border-white">
          {" "}
          <label>Back</label>
          <input
            className="w-6 h-6"
            type="checkbox"
            {...register("back")}
          />
        </div>
        <div className=" p-1 flex justify-between text-xl border-b border-white">
          {" "}
          <label>Legs</label>
          <input
            className="w-6 h-6"
            type="checkbox"
          {...register("legs")}
          />
        </div>
        <div className=" p-1 flex justify-between text-xl border-b border-white">
          {" "}
          <label>Biceps</label>
          <input
            className="w-6 h-6"
            type="checkbox"
          {...register("biceps")}
          />
        </div>
        <div className=" p-1 flex justify-between text-xl border-b border-white">
          {" "}
          <label>Triceps</label>
          <input
            className="w-6 h-6"
            type="checkbox"
          {...register("triceps")}
          />
        </div>
        <div className=" p-1 flex justify-between text-xl border-b border-white">
          {" "}
          <label>Shoulders</label>
          <input
            className="w-6 h-6"
            type="checkbox"
          {...register("shoulders")}
          />
        </div>
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="bg-zinc-700 w-full my-3 p-1 text-xl rounded-lg"
        ></textarea>
        <button className="w-full bg-sky-600 p-2 rounded-xl hover:bg-black duration-300">
          Save
        </button>
      </form>
    </div>
  );
}

export default TrainingFormPage;
