import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  @Output() public onEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public book: Book;

  constructor() { }

  public ngOnInit(): void {
  }

  public edit(): void {
    this.onEdit.emit(false);
  }
}
