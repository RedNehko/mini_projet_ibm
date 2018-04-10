import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-add-avis',
  templateUrl: './add-avis.component.html',
  styleUrls: ['./add-avis.component.css']
})
export class AddAvisComponent implements OnInit {

  movies: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    //this.http.get('http://localhost:6001/getMovies').subscribe((data:any[]) => {console.log(data)});
    this.http.get('http://localhost:6001/avis').subscribe((data:any[]) => {this.movies = data, console.log(this.movies)});
  }

}
