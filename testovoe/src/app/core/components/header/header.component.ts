import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { BookService } from 'src/app/library/services/book.service';
import { LoginService } from 'src/app/auth/services/login.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchValue: Subject<string> = new Subject<string>();
  public isMain: boolean;

  constructor(
    private bookService: BookService,
    public loginService: LoginService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((event: RouterEvent)  => typeof event.url === 'string'),
      distinctUntilChanged((event1: RouterEvent, event2: RouterEvent) => event1.url === event2.url))
    .subscribe((event: RouterEvent) => {
      this.isMain = (event.url === '/main' || event.url === '/') ? true : false;
    });

    this.searchValue.pipe(
      debounceTime(600),
      distinctUntilChanged()
    )
    .subscribe(value => {
      this.bookService.searchBooks(value);
    });
  }

  public logOut(): void {
    this.loginService.logOut();
  }
}
