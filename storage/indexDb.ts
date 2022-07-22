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

  saveAll(books: IBook[]): void {
    this.books.bulkPut(books).catch((err) => console.log(err));
  }

  async getAll(): Promise<IBook[]> {
    return this.books.toArray();
  }
}
