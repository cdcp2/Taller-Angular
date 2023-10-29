import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  seasonsAverage = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      series.forEach(serie => {
        this.seasonsAverage += serie.seasons
    })
    this.seasonsAverage = this.seasonsAverage / series.length
    this.series = series;
  });
  }

  ngOnInit() {
    this.getSeries();
  }

}
