import axios from "./axios";

export const getBadHabitsRequest = () => axios.get('/badhabits')
export const getBadHabitRequest = (id) => axios.get(`/badhabits/${id}`)
export const createBadHabitRequest = (badhabit) => axios.post('/badhabits', badhabit)
export const updateBadHabitRequest = (id,badhabit) => axios.put(`/badhabits/${id}`, badhabit)
export const deleteBadHabitRequest = (id) => axios.delete(`/badhabits/${id}`)