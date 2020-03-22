import { Component, OnInit, DoCheck } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-my-books-page',
  templateUrl: './my-books-page.component.html',
  styleUrls: ['./my-books-page.component.scss']
})
export class MyBooksPageComponent implements OnInit, DoCheck {

  public myBooks: Book[];

  constructor(
    private bookService: BookService,
    private loginService: LoginService
  ) { }

  public ngDoCheck(): void {
    this.myBooks = this.bookService.getBooks(this.loginService.currentUser.bookIds);
  }

  public ngOnInit(): void {
    this.myBooks = this.bookService.getBooks(this.loginService.currentUser.bookIds);
  }

}
