import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public adding: boolean = false;
  public books: BehaviorSubject<Book[]>;

  constructor(private bookService: BookService) { }

  public ngOnInit(): void {
    this.books = this.bookService.books$;
  }

}
