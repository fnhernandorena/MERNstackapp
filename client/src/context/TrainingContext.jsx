import { createContext, useContext, useState } from "react";
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

  const getTrainings = async () => {
    try {
      const res = await getTrainingsRequest();
      setTraining(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createTraining = async (training) => {
    const res = await createTrainingRequest(training);
    console.log(res);
  };

  const deleteTraining = async (id) => {
    try {
      const res = await deleteTrainingRequest(id);
      if (res.status === 204) setTraining(trainings.filter((training) => training._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const getTraining = async (id) => {
    try {
      const res = await getTrainingRequest(id);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateTraining = async (id, training) => {
    try {
      await updateTrainingRequest(id, training);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TrainingContext.Provider
      value={{ trainings, getTrainings, getTraining, deleteTraining, updateTraining, createTraining }}
    >
      {children}
    </TrainingContext.Provider>
  );
}

TrainingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
