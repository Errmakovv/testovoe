import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LoginGuard } from './core/guards/login.guard';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',
    loadChildren: () => import('./library/library.module')
        .then(m => m.LibraryModule),
    canActivate: [LoginGuard]
   },
   { path: 'login',
    loadChildren: () => import('./auth/auth.module')
        .then(m => m.AuthModule)
   },
  { path: '**', redirectTo: 'main', canActivate: [LoginGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    CoreModule
  ]
})
export class AppRoutingModule { }
