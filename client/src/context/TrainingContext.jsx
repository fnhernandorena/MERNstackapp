import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  createTrainingRequest,
  deleteTrainingRequest,
  getTrainingRequest,
  getTrainingsRequest,
  updateTrainingRequest,
} from "../api/training";

const TrainingContext = createContext();

export const useTraining = () => {
  const context = useContext(TrainingContext);

  if (!context) {
    throw new Error("useTraining must be used within a TrainingProvider");
  }

  return context;
};

export function TrainingProvider({ children }) {
  const [trainings, setTraining] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

 const getTrainings = async () => {
    try {
      const res = await getTrainingsRequest();
      setTraining(res.data);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const createTraining = async (training) => {
    try{
    createTrainingRequest(training);
  } catch (error) {console.log(error)
    setErrors(error.response.data);
  }
  };

  const deleteTraining = async (id) => {
    try {
      const res = await deleteTrainingRequest(id);
      if (res.status === 204) setTraining(trainings.filter((training) => training._id !== id));
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const getTraining = async (id) => {
    try {
      const res = await getTrainingRequest(id);
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const updateTraining = async (id, training) => {
    try {
      await updateTrainingRequest(id, training);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <TrainingContext.Provider
      value={{ trainings, errors, getTrainings, getTraining, deleteTraining, updateTraining, createTraining }}
    >
      {children}
    </TrainingContext.Provider>
  );
}

TrainingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
