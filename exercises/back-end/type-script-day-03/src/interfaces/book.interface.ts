// ./interfaces/book.interface.ts
interface Book {
    id?: number;
    // ? -> não obrigatório
    title: string;
    price: number;
    author: string;
    isbn: string;
  }
  
  export default Book;

  // é uma boa prátic colocar i I antes do nome da interface (IBook)para saber que é uma interface
  // to  com preguiça de por agora haushus