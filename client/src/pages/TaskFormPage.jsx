import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const {
    handleSubmit,
    register,
    setValue,
  } = useForm();
  const { createTask, getTask, updateTask, errors: TasksErrors } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("isDone", task.isDone);
      }
    }
    loadTask();
  }, [params.id, getTask, setValue]);

  const onSubmit = handleSubmit(async(data) => {
    if (params.id) {
      await updateTask(params.id, data);
    } else {
      await createTask(data);
    }
    if(TasksErrors.length==0) {
    navigate("/tasks");
    }
  });
  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="flex flex-col w-96">
        <h2 className="text-3xl font-bold mb-2">Task!</h2>
        {TasksErrors && <p className="text-red-500">{TasksErrors.message}</p>}
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
          autoFocus
        />{" "}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="bg-zinc-700 w-full my-1 p-1 text-xl rounded-lg"
        ></textarea>
        <div className=" p-1 flex justify-between text-xl border-b border-white">
          {" "}
          <label>Done</label>
          <input className="w-6 h-6" type="checkbox" {...register("isDone")} />
        </div>
        <button className="w-full bg-sky-600 mt-2 p-2 rounded-xl hover:bg-black duration-300">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;
