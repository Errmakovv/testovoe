import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  public ngOnInit(): void {
  }

  public onAdd(form: NgForm): void {
    this.bookService.addBook(form.value);
  }

}
