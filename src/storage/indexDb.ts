import Dexie from 'dexie';
import { IBook } from '../store/models/IBook';

export class MyBookStorage extends Dexie {
  books!: Dexie.Table<IBook, string>;

  constructor() {
    super('MyBookStorage');

    this.version(1).stores({
      books: 'id, name',
    });
  }

  saveOrUpdate(book: IBook): void {
    this.books.put(book);
  }

  update(book: IBook): void {
    this.books.update(book.id!, book);
  }

  remove(id: string): void {
    this.books.delete(id);
  }

  async getAll(): Promise<IBook[]> {
    return this.books.toArray();
  }
}
