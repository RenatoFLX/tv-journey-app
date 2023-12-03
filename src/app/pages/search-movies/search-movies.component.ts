import { Component, OnInit } from '@angular/core';
import { MediaApiService } from '../../shared/services/media-api/media-api.service';
import { Router } from '@angular/router';
import { Movie, SearchMedia } from 'src/app/shared/models/models';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  readonly MIN_PAGE: number = 1;

  searchInput: string;
  currentPage: number = 1;

  searchMediaResult: SearchMedia<Movie> = null;

  constructor(private mediaService: MediaApiService, private router: Router) {}

  ngOnInit(): void {}

  async searchMovie(paginator?: any): Promise<void> {
    if (!paginator) {
      this.currentPage = this.MIN_PAGE;
    } else {
      this.currentPage = paginator.page + 1;
    }
    this.searchMediaResult = await this.mediaService.searchMovies(
      this.searchInput,
      this.currentPage
    );
  }

  hasMediaToShow(): boolean {
    return this.searchMediaResult && this.searchMediaResult.results.length > 0;
  }

  navigateToMovieDetail(movieId: number): void {
    this.router.navigate(['/movie/' + movieId]);
  }
}
