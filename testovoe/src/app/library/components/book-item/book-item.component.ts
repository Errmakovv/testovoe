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
    this.isAdmin = this.loginService.currentUser.isAdmin;
  }

  public edit(): void {
    this.isEdit = false;
    this.bookService.saveBooks();
  }

  public delete(): void {
    this.loginService.deleteUsersBook(this.book.id);
    this.bookService.deleteBook(this.book.id);
  }

  public like(): void {
    let bookIds: number[] = this.loginService.currentUser.bookIds;
    if (bookIds.includes(this.book.id)) {
      this.loginService.currentUser.bookIds = bookIds.filter((id: number) => id !== this.book.id);
      this.bookService.unLikeBook(this.book);
    } else {
      bookIds.push(this.book.id);
      this.bookService.likeBook(this.book);
    }
    this.loginService.saveUsers();
  }
}
