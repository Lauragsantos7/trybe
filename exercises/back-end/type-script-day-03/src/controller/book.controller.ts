// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import BookService from '../services/book.service';

class BooksController {
  bookService: BookService;
  
  constructor(bookService = new BookService()) {
  this.bookService = bookService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };

  async getById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);

    const book = await this.bookService.getById(id);

    if (!book) {
      res.status(statusCodes.NOT_FOUND).json({ message: 'Book not found!' });
    } else {
      res.status(statusCodes.OK).json(book);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const book = req.body;
    const bookCreated = await this.bookService.create(book);
    res.status(statusCodes.CREATED).json(bookCreated);
  }
}

export default BooksController;