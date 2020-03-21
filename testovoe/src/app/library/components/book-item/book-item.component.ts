import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() public book: Book;

  constructor(private bookService: BookService) { }

  public ngOnInit(): void {
  }

  public delete(): void {
    console.log(this.book.id);
    this.bookService.deleteBook(this.book.id);
  }
}
