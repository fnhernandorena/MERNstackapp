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
        console.log(training);
        setValue("title", training.title);
        setValue("description", training.description);
      }
    }
    loadTraining();
  }, []);

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
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
        ></textarea>
        <button className="w-full bg-sky-600 mt-2 p-2 rounded-xl hover:bg-black duration-300">Save</button>
      </form>
    </div>
  );
}

export default TrainingFormPage;
