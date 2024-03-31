import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { createBadHabitRequest, deleteBadHabitRequest, getBadHabitRequest, getBadHabitsRequest, updateBadHabitRequest } from "../api/badhabits";

const BadHabitContext = createContext();

export const useBadHabits = () => {
  const context = useContext(BadHabitContext);

  if (!context) {
    throw new Error("useBadHabits must be used within a BadHabitsProvider");
  }

  return context;
};

export function BadHabitProvider({ children }) {
  const [badhabits, setBadHabit] = useState([]);

  const getBadHabits = async () => {
    try {
      const res = await getBadHabitsRequest();
      setBadHabit(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createBadHabit = async (badhabit) => {
    createBadHabitRequest(badhabit);
  };

  const deleteBadHabit = async (id) => {
    try {
      const res = await deleteBadHabitRequest(id);
      if (res.status === 204) setBadHabit(badhabits.filter((badhabit) => badhabit._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const getBadHabit = async (id) => {
    try {
      const res = await getBadHabitRequest(id);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateBadHabit = async (id, badhabit) => {
    try {
      await updateBadHabitRequest(id, badhabit);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BadHabitContext.Provider
      value={{ badhabits, getBadHabit, getBadHabits, deleteBadHabit, updateBadHabit,createBadHabit }}
    >
      {children}
    </BadHabitContext.Provider>
  );
}

BadHabitProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
