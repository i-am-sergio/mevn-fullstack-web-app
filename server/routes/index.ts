import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.send(tasks);
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById({ _id: req.params.id })
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.send(task);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.json(newTask)
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        });
        if(!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.json(updatedTask);
    } catch (error) {
        return res.status(500).send(error)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (error) {
        return res.status(500).send(error)
    }
});

export default router;