import { TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('DashboardComponent', () => {

  it('should create', () => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      declarations: [ DashboardComponent ]
    })
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should contain "Top Heroes"', () => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    const fixture = TestBed.createComponent(DashboardComponent);

    const dashboardElement: HTMLElement = fixture.nativeElement;
    expect(dashboardElement.textContent).toContain('Top Heroes');

  });
});
