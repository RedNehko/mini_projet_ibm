import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieFilmComponent } from './serie-film.component';

describe('SerieFilmComponent', () => {
  let component: SerieFilmComponent;
  let fixture: ComponentFixture<SerieFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
