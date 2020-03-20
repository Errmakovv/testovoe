import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books: Book[] = [
    {
      name: 'fkgbk',
      genre: 'rd',
      image: 'https://hugeorange.com/wp-content/uploads/2018/12/books-521812297.jpg',
      description: 'ssfs',
      link: 'string'
    },
    {
      name: 'fkgbk',
      genre: 'rd',
      image: 'https://hugeorange.com/wp-content/uploads/2018/12/books-521812297.jpg',
      description: 'ssfs',
      link: 'string'
    },
    {
      name: 'fkgbk',
      genre: 'rd',
      image: 'https://hugeorange.com/wp-content/uploads/2018/12/books-521812297.jpg',
      description: 'ssfs',
      link: 'string'
    },
    {
      name: 'fkgbk',
      genre: 'rd',
      image: 'https://hugeorange.com/wp-content/uploads/2018/12/books-521812297.jpg',
      description: 'ssfs',
      link: 'string'
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
