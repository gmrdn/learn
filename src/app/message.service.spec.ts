import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('should be empty after being cleared', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.add('fake message');
    service.clear();
    expect(service.messages).toEqual([]);
  });
});
