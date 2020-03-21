import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() public book: Book;
  public isEdit: boolean = false;
  public isAdmin: boolean;

  constructor(
    private bookService: BookService,
    private loginService: LoginService
  ) { }

  public ngOnInit(): void {
    this.isAdmin = this.loginService.isAdmin();
  }

  public delete(): void {
    console.log(this.book.id);
    this.bookService.deleteBook(this.book.id);
  }

  public like(): void {
    this.bookService.likeBook(this.book);
  }
}
