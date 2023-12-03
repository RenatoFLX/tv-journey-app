import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { AccordionModule } from 'primeng/accordion';
import { KnobModule } from 'primeng/knob';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { SearchSeriesComponent } from './pages/search-series/search-series.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    MovieDetailComponent,
    UpcomingComponent,
    SearchSeriesComponent,
    SeriesDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    CarouselModule,
    PaginatorModule,
    MenubarModule,
    KnobModule,
    AccordionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
