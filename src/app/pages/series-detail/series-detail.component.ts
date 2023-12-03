import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaApiService } from '../../shared/services/media-api/media-api.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css'],
})
export class SeriesDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaApiService
  ) {}

  async ngOnInit(): Promise<void> {
    
  }
}
