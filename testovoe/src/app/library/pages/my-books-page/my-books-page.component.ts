import { Component, OnInit, DoCheck } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-my-books-page',
  templateUrl: './my-books-page.component.html',
  styleUrls: ['./my-books-page.component.scss']
})
export class MyBooksPageComponent implements OnInit, DoCheck {

  public myBooks: Book[];

  constructor(private bookService: BookService) { }

  public ngDoCheck(): void {
    this.myBooks = this.bookService.myBooks;
  }

  public ngOnInit(): void {
    this.myBooks = this.bookService.myBooks;
  }

}
