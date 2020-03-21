import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { Routes, RouterModule } from '@angular/router';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { BookListComponent } from './components/book-list/book-list.component';
import { MyBooksPageComponent } from './pages/my-books-page/my-books-page.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
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
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class LibraryModule { }
