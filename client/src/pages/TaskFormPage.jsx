import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { handleSubmit, register, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
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

export default TaskFormPage;
