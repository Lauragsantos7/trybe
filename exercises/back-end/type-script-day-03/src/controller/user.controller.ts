import  { Request, Response } from 'express';
import userService from '../services/user.service';
import statusCodes from '../utils/statusCodes';

async function login(req: Request, res: Response) {
    const { username, password } = req.body;
    if(!username || typeof username !== 'string') {
        return res.status(statusCodes. UNAUTHORIZED).json({ message: 'username or password invalids' });
    }
    if(!password || typeof password !== 'string') {
        return res.status(statusCodes. UNAUTHORIZED).json({ message: 'username or password invalids' });
    }
   const token =  await userService.login(username, password);
   return res.status(statusCodes.OK).json({ token })
};

async function getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    return res.status(statusCodes.OK).json(users);
}
export default {
    login,
    getAllUsers
};