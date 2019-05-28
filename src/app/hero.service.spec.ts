import { HeroService } from './hero.service';

describe('HeroService', () => {

  const messageMock = {
    add: jest.fn()
  };

  it('should write message "HeroService: fetched heroes" when getting heroes', () => {
    const service = new HeroService(messageMock as any);
    service.getHeroes();
    expect(messageMock.add).toHaveBeenCalledTimes(1);
    expect(messageMock.add).toHaveBeenCalledWith('HeroService: fetched heroes');
  });
});
