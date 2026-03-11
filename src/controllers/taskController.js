const Task =  require("../models/Taks");

exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title é obrigatório"
            });
        }

        const task = await Task.create({ title, description });

        res.json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Erro no servidor"
        });
    }
};

exports.getTasks = async (req, res) => {
    const tasks = await Task.findAll();

    res.json({
        success: true,
        data: tasks
    });
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;

    const task = await Task.findByPk(id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task não encontrada"
        });
    }

    await task.update(req.body);

    res.json({
        success: true,
        data: task
    });
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    const task = await Task.findByPk(id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task não encontrada"
        });
    }

    await task.destroy();

    res.json({
        success: true,
        message: "Task deletada"
    });
};