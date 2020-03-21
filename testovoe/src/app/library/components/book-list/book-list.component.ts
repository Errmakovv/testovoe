import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books: BehaviorSubject<Book[]>;

  constructor(private bookService: BookService) { }

  public ngOnInit(): void {
    this.books = this.bookService.books$;
  }

}
