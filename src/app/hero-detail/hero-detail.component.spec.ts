import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


describe('HeroDetailComponent', () => {


  it('should create', () => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule.withRoutes([]),
        FormsModule
      ],
      declarations: [ HeroDetailComponent ]
    })
    const fixture = TestBed.createComponent(HeroDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
