import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import data from './data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = data;
  public books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(data);

  constructor() { }

  public getBooks(): BehaviorSubject<Book[]> {
    return this.books$;
  }

  public addBook(book: Book): void {
    this.books.push({id: this.books[this.books.length - 1].id + 1, ...book});
    this.books$.next(this.books);
  }

  public deleteBook(id: number): void {
    this.books = this.books.filter((book: Book) => book.id !== id);
    this.books$.next(this.books);
  }

  public searchBooks(value: string): void {
    value = value.toLowerCase().trim();
    this.books$.next(this.books.filter((book: Book) => {
      return book.name.toLowerCase().includes(value) || book.genre.toLowerCase().includes(value);
    }));
  }
}
