import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-serie-film',
  templateUrl: './serie-film.component.html',
  styleUrls: ['./serie-film.component.css']
})
export class SerieFilmComponent implements OnInit {

  movies: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    //this.http.get('http://localhost:6001/getMovies').subscribe((data:any[]) => {console.log(data)});
    this.http.get('http://localhost:6001/getMovies').subscribe((data:any[]) => {this.movies = data, console.log(this.movies)});
  }

}
