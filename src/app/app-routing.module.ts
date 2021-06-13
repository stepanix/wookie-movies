import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    component: MovieListComponent,
    path: 'home'
  },
  {
    path: 'movie-detail/:slug',
    loadChildren: () => import('./components/movie-detail/movie-detail.module').then(mod => mod.MovieDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
