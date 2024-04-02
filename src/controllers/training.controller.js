import Training from '../models/training.model.js'

export const getTrainings = async (req, res) => {
    try {
        const trainings = await Training.find({ user: req.user.id });
        res.json(trainings)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

export const createTraining = async (req, res) => {
    try {
        const { description, chest, back, legs, biceps, triceps, shoulders, date } = req.body;
        const newTraining = new Training({
            description,
            chest,
            back,
            legs,
            biceps,
            triceps,
            shoulders,
            date,
            user: req.user.id
        });

        const savedTraining = await newTraining.save();
        res.json(savedTraining);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

export const getTraining = async (req, res) => {
    try {
        const training = await Training.findById(req.params.id).populate('user');
        if (!training) return res.status(404).json({ message: 'Training not found' });
        res.json(training);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

export const updateTraining = async (req, res) => {
    try {
        const training = await Training.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!training) return res.status(404).json({ message: 'Training not found' });
        res.json(training);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

export const deleteTraining = async (req, res) => {
    try {
        const training = await Training.findByIdAndDelete(req.params.id);
        if (!training) return res.status(402).json({ message: 'Training not found' });
        return res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};