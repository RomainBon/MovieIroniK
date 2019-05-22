import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Movie } from '../class/movie';
import { ServerPage } from '../class/server-page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  movies$: Movie[];
  constructor(private movieService:MovieService) { }
  search(value:any){
    this.movies$=[];
    this.movieService.searchMovie(value, 1).subscribe(
      (page:ServerPage)=>{
        this.movies$= page.results;
      }
    );
  }
}
