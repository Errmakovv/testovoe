import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../models/book.model';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public adding: boolean = false;
  public books: BehaviorSubject<Book[]>;
  public isAdmin: boolean;

  constructor(
    private bookService: BookService,
    private loginService: LoginService
  ) { }

  public ngOnInit(): void {
    this.books = this.bookService.books$;
    this.isAdmin = this.loginService.currentUser.isAdmin;
  }

}
