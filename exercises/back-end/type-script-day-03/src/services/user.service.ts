import  userModel  from '../models/user.model';
import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';


async function login(username:string, password: string): Promise<string> {
    const user = await userModel.findUserByEmail(username);
    if(!user || password !== user.password) {
        throw new Error("UNAUTHORIZED")
    }

    const secret = 'huashuash';
    const expireIn = '5d';
   return jwt.sign({username: user.username}, secret );
};

async function getAllUsers(): Promise<User[]> {
const users = await userModel.getAllUsers();
if (!users) {
    throw new Error('No has users')
}
return users;
};


export default {
    login, 
    getAllUsers
}