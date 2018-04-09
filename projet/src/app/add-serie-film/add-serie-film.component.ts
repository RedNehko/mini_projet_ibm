import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

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

  }

}
