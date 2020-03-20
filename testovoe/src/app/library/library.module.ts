import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { Routes, RouterModule } from '@angular/router';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { BookListComponent } from './components/book-list/book-list.component';
import { MyBooksPageComponent } from './pages/my-books-page/my-books-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'mybooks',
    component: MainPageComponent,
  }
];

@NgModule({
  declarations: [MainPageComponent, BookItemComponent, BookListComponent, MyBooksPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class LibraryModule { }
