import { MessageService } from './message.service';


describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be empty after being cleared', () => {
    service.add('fake message');
    service.clear();
    expect(service.messages).toEqual([]);
  });

  it('should add "fake message" to the list of messages', () => {
    service.add('fake message');
    expect(service.messages).toContain('fake message')
  });

  it('should contain an Array of messages', () => {
    expect(service.messages).toBeInstanceOf(Array);
  });
});


// import { TestBed } from '@angular/core/testing';

// import { MessageService } from './message.service';

// describe('MessageService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: MessageService = TestBed.get(MessageService);
//     expect(service).toBeTruthy();
//   });

//   it('should be empty after being cleared', () => {
//     const service: MessageService = TestBed.get(MessageService);
//     service.add('fake message');
//     service.clear();
//     expect(service.messages).toEqual([]);
//   });
// });
