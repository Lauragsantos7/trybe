import User  from "../interfaces/user.interface";
import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from "./connection";

async function findUserByEmail(username: string): Promise<User | undefined> {
    
    const [result] = await connection.execute<RowDataPacket[]>('SELECT * FROM users WHERE username = ?', [username],)
    // desestruturar o primeiro item do array:
    const [user] = result;
    return user as User | undefined;
};

async function getAllUsers(): Promise<User[]> {
    const [result] = await connection.execute<RowDataPacket[]>('SELECT username FROM users')
    return result as User[];

}
export default {
    findUserByEmail,
    getAllUsers,
};