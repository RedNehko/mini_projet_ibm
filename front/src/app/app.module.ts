import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SerieFilmComponent } from './serie-film/serie-film.component';
import { AddAvisComponent } from './add-avis/add-avis.component';
import { AddSerieFilmComponent } from './add-serie-film/add-serie-film.component';


var routes = [
  {path: '', component: HomeComponent},
  {path: 'serie_film', component: SerieFilmComponent},
  {path: 'serie_film/add', component: AddAvisComponent},
  {path: 'serie_film/:id', component: AddAvisComponent},
  {path: 'add_serie_film', component: AddSerieFilmComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerieFilmComponent,
    AddAvisComponent,
    AddSerieFilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
