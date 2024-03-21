import axios from "./axios";

export const getTrainingsRequest = () => axios.get('/training')
export const getTrainingRequest = (id) => axios.get(`/training/${id}`)
export const createTrainingRequest = (training) => axios.post('/training', training)
export const updateTrainingRequest = (id,training) => axios.put(`/training/${id}`, training)
export const deleteTrainingRequest = (id) => axios.delete(`/training/${id}`)