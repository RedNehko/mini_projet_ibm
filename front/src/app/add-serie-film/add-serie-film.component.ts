import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-serie-film',
  templateUrl: './add-serie-film.component.html',
  styleUrls: ['./add-serie-film.component.css']
})
export class AddSerieFilmComponent implements OnInit {

  form: FormGroup;

  typeSF = [
    {id: 1, name:'Série', value: 'serie'},
    {id: 2, name:'Film', value: 'film'}
  ];

  constructor(private formBuilder: FormBuilder, private http:Http) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: -1,
      title: '',
      type: '',
      description: '',
      addBy: '',
      addDate: new Date()
    });
  }

  createSF() {
    console.log(this.form);
    this.http.post('http://localhost:6001/app.js', this.form);
  }

}
