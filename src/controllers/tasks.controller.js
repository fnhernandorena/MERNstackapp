import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    try{
    const tasks = await Task.find({user:req.user.id}).populate('user');
    res.json(tasks)
} catch (err) {
    res.status(500).json({ message: err.message })
}
};

export const createTask = async (req, res) => {
try{
    const { title, description, isDone, date } = req.body;

    const newTask = new Task({
        title,
        description,
        isDone,
        date,
        user: req.user.id
    });

    const savedTask = await newTask.save();
    res.json(savedTask);
} catch (err) {
    res.status(500).json({ message: err.message })
}
};

export const getTask = async (req, res) => {
    try{
    const task = await Task.findById(req.params.id).populate('user');
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
} catch (err) {
    res.status(500).json({ message: err.message })
}
};

export const updateTask = async (req, res) => {
    try{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
} catch (err) {
    res.status(500).json({ message: err.message })
}
};

export const deleteTask = async (req, res) => {
    try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(402).json({ message: 'Task not found' });
    return res.sendStatus(204);
} catch (err) {
    res.status(500).json({ message: err.message })
}
};