import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-serie-film',
  templateUrl: './add-serie-film.component.html',
  styleUrls: ['./add-serie-film.component.css']
})
export class AddSerieFilmComponent implements OnInit {

  form: FormGroup;

  typeSF = [
    { id: 1, name: 'Série', value: 'serie' },
    { id: 2, name: 'Film', value: 'film' }
  ];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: -1,
      title: '',
      type: '',
      description: '',
      avis: '',
      addBy: '',
      addDate: new Date()
    });
  }

  createSF() {
    console.log(this.form);
    this.http.post('http://localhost:6001/add_serie_film', this.form.value).subscribe();
    this.form.reset();
    alert("Votre contenu a été envoyé avec succès !");
  }

}
