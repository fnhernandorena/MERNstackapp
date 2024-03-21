import Training from '../models/training.model.js'

export const getTrainings = async (req, res) => {
    const trainings = await Training.find({user:req.user.id});
    res.json(trainings)
};
export const createTraining = async (req, res) => {

    const { title, description, date } = req.body;

    const newTraining = new Training({
        title,
        description,
        date,
        user: req.user.id
    });

    const savedTraining = await newTraining.save();
    res.json(savedTraining);
};
export const getTraining = async (req, res) => {
    const training = await Training.findById(req.params.id).populate('user');
    if (!training) return res.status(404).json({ message: 'Training not found' });
    res.json(training);
};
export const updateTraining = async (req, res) => {
    const training = await Training.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!training) return res.status(404).json({ message: 'Training not found' });
    res.json(training);
};
export const deleteTraining  = async (req, res) => {
    const training = await Training.findByIdAndDelete(req.params.id);
    if (!training) return res.status(402).json({ message: 'Training not found' });
    return res.sendStatus(204);
};