import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSerieFilmComponent } from './add-serie-film.component';

describe('AddSerieFilmComponent', () => {
  let component: AddSerieFilmComponent;
  let fixture: ComponentFixture<AddSerieFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSerieFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSerieFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
