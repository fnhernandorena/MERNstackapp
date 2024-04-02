import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getTasks = async () => {
      const res = await getTasksRequest();
      setTasks(res.data);
  };

  const createTask = async (task) => {
    try{
       await createTaskRequest(task);
  } catch (error) {
    setErrors(error.response.data);
  }
  };

  const deleteTask = async (id) => {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
  };

  const getTask = async (id) => {
      const res = await getTaskRequest(id);
      return res.data;
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, errors, createTask, getTasks, deleteTask, getTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
