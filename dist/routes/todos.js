"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRouter = (0, express_1.default)();
const todos = [
    { title: 'First Task', status: false, id: 1 }
];
todoRouter.get('/', (req, res, next) => {
    res.status(200).json(todos);
});
todoRouter.post('/', (req, res, next) => {
    const { body } = req;
    const todo = {
        id: todos.length + 1,
        title: body.title,
        status: false
    };
    todos.push(todo);
    res.status(201).json(todo);
});
todoRouter.get('/:id', (req, res, next) => {
    const taskID = req.params.id;
    const foundTodo = todos.find(todo => todo.id === Number(taskID));
    if (!foundTodo) {
        res.statusCode = 404;
        res.json({
            error: 'Todo not found'
        });
        return;
    }
    res.status(200).json(foundTodo);
});
exports.default = todoRouter;
