import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaApiService } from '../../shared/services/media-api/media-api.service';
import { firstValueFrom } from 'rxjs';
import { MovieDetails, Review, ReviewsList } from '../../shared/models/models';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  readonly MAX_CONTENT_LENGHT: number = 600;
  
  movieDetails: MovieDetails;
  reviewsList: ReviewsList;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaApiService
  ) {}

  async ngOnInit(): Promise<void> {
    const movieId: string = this.route.snapshot.params['id'];

    if (movieId) {
      this.reviewsList = await this.mediaService.getMovieReviews(movieId);
      this.movieDetails = await this.mediaService.getMovieDetails(movieId);
    }
  }

  getMovieGenres(movieDetails: MovieDetails): string {
    return movieDetails.genres.map((genre) => genre.name).join(' | ');
  }

  getReviewContent(review: Review): string {
    return review.content.length > this.MAX_CONTENT_LENGHT
      ? review.content.substring(0, this.MAX_CONTENT_LENGHT)
      : review.content;;
  }

  navigateBack(): void {
    window.history.back();
  }
}
