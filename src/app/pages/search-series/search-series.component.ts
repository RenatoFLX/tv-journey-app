import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchMedia, TvSerie } from 'src/app/shared/models/models';
import { MediaApiService } from 'src/app/shared/services/media-api/media-api.service';

@Component({
  selector: 'app-search-series',
  templateUrl: './search-series.component.html',
  styleUrls: ['./search-series.component.css'],
})
export class SearchSeriesComponent {

  topRatedSeries: SearchMedia<TvSerie> = null;

  carouselResponsiveOptions = [
    {
      breakpoint: '500px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '800px',
      numVisible: 4,
      numScroll: 1,
    },
  ];

  constructor(private mediaService: MediaApiService,
              private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.topRatedSeries = await this.mediaService.getTopRatedSeries(1);
    this.topRatedSeries.results.push(
      ...(await this.mediaService.getTopRatedSeries(2)).results
    );
    this.topRatedSeries.results.push(
      ...(await this.mediaService.getTopRatedSeries(3)).results
    );
  }

  navigateToSerieDetail(series: TvSerie): void {
    this.router.navigate(['/series/' + series.id]);
  }

  hasTopRatedSeries(): boolean {
    return this.topRatedSeries && this.topRatedSeries.results.length > 0;
  }
}
