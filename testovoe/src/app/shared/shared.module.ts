import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ]
})
export class SharedModule { }
