import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BookService } from 'src/app/library/services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchValue: Subject<string> = new Subject<string>();

  constructor(private bookService: BookService) { }

  public ngOnInit(): void {
    this.searchValue.pipe(
      debounceTime(600),
      distinctUntilChanged()
    )
    .subscribe(value => {
      this.bookService.searchBooks(value);
    });
  }

}
