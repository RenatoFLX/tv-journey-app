import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { SearchSeriesComponent } from './pages/search-series/search-series.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'upcoming',
    pathMatch: 'full',
  },
  {
    path: 'upcoming',
    component: UpcomingComponent,
    pathMatch: 'full',
  },
  {
    path: 'search-movies',
    component: SearchMoviesComponent,
    pathMatch: 'full',
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'search-series',
    component: SearchSeriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'series/:id',
    component: SeriesDetailComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
