import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { BookListComponent } from './components/book-list/book-list.component';
import { MyBooksPageComponent } from './pages/my-books-page/my-books-page.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'mybooks',
    component: MyBooksPageComponent,
  }
];

@NgModule({
  declarations: [
    MainPageComponent,
    BookItemComponent,
    BookListComponent,
    MyBooksPageComponent,
    AddBookComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LibraryModule { }
