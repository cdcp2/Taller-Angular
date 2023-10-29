import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  seasonsAverage = 0;

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateSeasonsAverage();
    });
  }

  calculateSeasonsAverage() {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    this.seasonsAverage = totalSeasons / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }
}
