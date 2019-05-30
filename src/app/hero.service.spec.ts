import { HeroService } from './hero.service';
import { of } from 'rxjs';


describe('HeroService', () => {

  const messageMock = {
    add: jest.fn()
  };

  const mockHero = {
    id: 1, name: 'Mr. Mock', ac: 9,hp_current: 7, hp_max:8, strength: 12
  };

  let service: HeroService;

  beforeEach(() => {
    service = new HeroService(messageMock as any);
    messageMock.add.mockClear();
  });

  it('should return an Array (async)', (done) => {
    service.getHeroes().subscribe((asyncData)=>{
      expect(asyncData).toBeInstanceOf(Array);
      done();
      });
  });

  it('should return "Mr. Mock" (async)', (done) => {
    const spy = jest.spyOn(service, 'getHero');
    spy.mockReturnValue(of(mockHero));
    service.getHero(1).subscribe((asyncData)=>{
      expect(asyncData.name).toEqual('Mr. Mock');
      done();
      });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should be undefiend when id doesn\'t exist (async)', (done) => {
    service.getHero(0).subscribe((asyncData)=>{
      expect(asyncData).toBeUndefined();
      done();
      });
  });

  it('should write message "HeroService: fetched heroes" when getting heroes', () => {
    service.getHeroes();
    expect(messageMock.add).toHaveBeenCalledTimes(1);
    expect(messageMock.add).toHaveBeenCalledWith('HeroService: fetched heroes');
  });

});
