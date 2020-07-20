import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./pages/edit/edit.module').then(module => module.EditModule)
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./pages/favorites/favorites.module').then(
        module => module.FavoritesModule
      )
  },
  {
    path: 'create-joke',
    loadChildren: () =>
      import('./pages/create-joke/create-joke.module').then(
        module => module.CreateJokeModule
      )
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
