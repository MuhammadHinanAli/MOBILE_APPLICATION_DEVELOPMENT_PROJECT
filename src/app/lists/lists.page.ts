import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../Services/movies.service'; //IMPORT FROM SERVICES

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  movieData: any = [];  //VARIABLE WITH ARRAY OF DATA TYPE ANY
  hidden :boolean =true;

  constructor(private service: MoviesService) { } 

  ngOnInit() {
    this.service.GetMovieData().subscribe(    //IMPORTS FUNCTION FROM SERVICES
      (data) => { //SUBSCRIBES TO DATA
      this.movieData = data.Search; //ASSIGNS DATA TO DATA.SERACH
      console.log(this.movieData); //DISPLAYS DATA
    });
  }

}
