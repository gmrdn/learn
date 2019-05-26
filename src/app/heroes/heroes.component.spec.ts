import { HeroesComponent } from './heroes.component';
import { of, timer} from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { HeroService } from '../hero.service';
import { fakeAsync, discardPeriodicTasks, tick } from '@angular/core/testing';

describe('Heroes Component', () => {
  let component: HeroesComponent;
  const fakeHero = {
    id: 1,
    name: 'fake'
  } as any;
  // const fakeHeroService = {
  //   getHeroes: () => of([fakeHero]),
  //   messageService: {}
  // } as any;
  // const fakeHeroService = jasmine.createSpyObj('heroService', ['getHeroes']);
  const heroService = new HeroService(null);

  beforeEach(() => {
    component = new HeroesComponent(heroService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a hero in the list', () => {
    const spy = spyOn(heroService, 'getHeroes').and.returnValue(of([fakeHero]));
    component.ngOnInit();
    expect(component.heroes[0]).toEqual(fakeHero);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  // it('should have a hero in the list, async', fakeAsync(() => {
  //   // const spy = spyOn(heroService, 'getHeroes').and.returnValue(of([fakeHero]));
  //   const spy = spyOn(heroService, 'getHeroes').and.returnValue(timer(1000).pipe(mapTo([fakeHero])));
  //   component.ngOnInit();
  //   console.log(component.getHeroes());
  //   expect(component.heroes[0]).toEqual(fakeHero);
  //   expect(spy).toHaveBeenCalledTimes(1);
  //   tick(999);
  //   discardPeriodicTasks();
  // }));
});
