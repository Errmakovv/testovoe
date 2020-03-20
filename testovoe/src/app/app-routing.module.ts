import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',
    loadChildren: () => import('./library/library.module')
        .then(m => m.LibraryModule)
   },
   { path: 'login',
    loadChildren: () => import('./auth/auth.module')
        .then(m => m.AuthModule)
   },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule
  ],
  exports: [
    RouterModule,
    CoreModule
  ]
})
export class AppRoutingModule { }
