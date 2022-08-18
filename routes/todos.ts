import {Request,Response,NextFunction} from 'express';
import router,{Router} from 'express'
import Todo from '../data/models/todo';

const todoRouter:Router = router();

const todos:Todo[] = [
    {title:'First Task',status:false,id:1}
];

todoRouter.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json(todos)
});

todoRouter.post('/',(req:Request,res:Response,next:NextFunction)=>{
    const {body} = req;

    const todo:Todo = {
        id:todos.length+1,
        title:body.title,
        status:false
    }

    todos.push(todo)

    res.status(201).json(todo)
});

todoRouter.get('/:id',(req:Request,res:Response,next:NextFunction)=>{
    const taskID = req.params.id;
    const foundTodo = todos.find(todo=>todo.id === Number(taskID));
    if (!foundTodo) {
        res.statusCode = 404;
        res.json({
            error:'Todo not found'
        })
        return;
    }
    res.status(200).json(foundTodo)
});




export default todoRouter;