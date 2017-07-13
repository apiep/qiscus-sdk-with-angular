import { TestBed, inject } from '@angular/core/testing';

import { QiscusChatService } from './qiscus-chat.service';

describe('QiscusChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QiscusChatService]
    });
  });

  it('should be created', inject([QiscusChatService], (service: QiscusChatService) => {
    expect(service).toBeTruthy();
  }));
});
