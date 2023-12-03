import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  Movie,
  MovieDetails,
  ReviewsList,
  SearchMedia,
  TvSerie,
} from '../../models/models';

@Injectable({
  providedIn: 'root',
})
export class MediaApiService {
  options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODg0ODI5ODBiM2ZkYzRmZWRmYjk2OWUyMDQxZjM0MSIsInN1YiI6IjY1NGMxMDE2NWE1ZWQwMDBhZDU3Yzg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HyFQIKpaewa7hk204029tIJxWjpnR6JUOWRvl2EZOOg',
    },
  };

  constructor(private httpClient: HttpClient) {}

  async searchMovies(searchString: string, page: number): Promise<SearchMedia<Movie>> {
    if (page !== null && searchString) {
      const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=${page}&query=${searchString}`;
      return await firstValueFrom(
        this.httpClient.get<SearchMedia<Movie>>(url, this.options)
      );
    }
    return null;
  }

  async getMovieDetails(movieId: string): Promise<MovieDetails> {
    if (movieId) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
      return await firstValueFrom(
        this.httpClient.get<MovieDetails>(url, this.options)
      );
    }
    return null;
  }

  async getMovieReviews(movieId: string): Promise<ReviewsList> {
    if (movieId) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
      return await firstValueFrom(
        this.httpClient.get<ReviewsList>(url, this.options)
      );
    }
    return null;
  }

  async getTopRatedSeries(page: number): Promise<SearchMedia<TvSerie>> {
    const url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page === 0 ? 1 : page}`;
    return await firstValueFrom(this.httpClient.get<SearchMedia<TvSerie>>(url, this.options));
  }
}
