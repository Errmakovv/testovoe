import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() public book: Book;

  constructor() { }

  public ngOnInit(): void {
  }

}
