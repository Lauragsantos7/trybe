// ./models/book.model.ts

import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  connection: Pool;

 // recebe a connection como parametro pra não ficar refém da importação do mysql pq pode ser que troque o método (para mongobd por ex:)
 // a importação do connection é feita na model pq sí so preccis aalterar lá qdo trocar de método/tecnologia
  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Book[]> {
    // getAll retorna uma promisse com array de objetos Book
    const result = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM books');
          // .execute pode retornar vários tipos de dados diferentes, de acordo com o tipo de requisição que está sendo feita: select -> rolDataPacket[] - pacote com linhas de dados;
      // update -> OkPacket - um info de ok
      // delete -> OkPacket;
      // insert -> ResultSetHeader - inserção de dados

    // .execute retorna um array com dois elementos: os dados e os buffers(metadados), por isso, desestruturar pra pegar o primeiro item do array: 
    const [rows] = result;
    return rows as Book[];
    // Book está no arquivo interfaces/book.interface e é o corpo da requisição: id, title, price, autor, isbn.
  }

  async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }

  async getById(id: number): Promise<Book> {
    const result = await this.connection
      .execute('SELECT * FROM books WHERE id=?', [id]);
    const [rows] = result;
    const [book] = rows as Book[];
    return book;
  }

}