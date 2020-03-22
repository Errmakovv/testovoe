import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[];
  public books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor(private http: HttpClient) {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
      this.books$.next(this.books);
    } else {
      this.http.get('../../../assets/data/books.json').subscribe((response: Book[]) => {
        this.books = response;
        this.books$.next(this.books);
      });
    }
  }

  public saveBooks(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  public addBook(book: Book): void {
    this.books.push({
      id: this.books[this.books.length - 1].id + 1,
      likesCount: 0,
      ...book
    });
    this.saveBooks();
  }

  public getBooks(ids: number[]): Book[] {
    return ids.map((id: number) => {
      return this.books.find((book: Book) => book.id === id );
    });
  }

  public likeBook(bookLike: Book): void {
    bookLike.likesCount++;
    this.saveBooks();
  }

  public unLikeBook(bookLike: Book): void {
    bookLike.likesCount--;
    this.saveBooks();
  }

  public deleteBook(id: number): void {
    this.books = this.books.filter((book: Book) => book.id !== id);
    this.books$.next(this.books);
    this.saveBooks();
  }

  public searchBooks(value: string): void {
    value = value.toLowerCase().trim();
    this.books$.next(this.books.filter((book: Book) => {
      return book.name.toLowerCase().includes(value) || book.genre.toLowerCase().includes(value);
    }));
  }
}
