import {Request,Response,NextFunction} from 'express';
import router,{Router} from 'express'

const todoRouter:Router = router();

todoRouter.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send('got the initial route')
});

export default todoRouter;