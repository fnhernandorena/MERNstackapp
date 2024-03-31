import BadHabit from '../models/badhabit.model.js'

export const getBadHabits = async (req, res) => {
    const tasks = await BadHabit.find({user:req.user.id}).populate('user');
    res.json(tasks)
};
export const createBadHabit = async (req, res) => {

    const { title, times, date } = req.body;

    const newTask = new BadHabit({
        title,
        times,
        date,
        user: req.user.id
    });

    const savedTask = await newTask.save();
    res.json(savedTask);
};
export const getBadHabit = async (req, res) => {
    const task = await BadHabit.findById(req.params.id).populate('user');
    if (!task) return res.status(404).json({ message: 'Bad habit not found' });
    res.json(task);
};
export const updateBadHabit = async (req, res) => {
    const task = await BadHabit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Bad habit not found' });
    res.json(task);
};
export const deleteBadHabit = async (req, res) => {
    const task = await BadHabit.findByIdAndDelete(req.params.id);
    if (!task) return res.status(402).json({ message: 'Bad habit not found' });
    return res.sendStatus(204);
};