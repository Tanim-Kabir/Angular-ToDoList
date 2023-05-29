import { TestBed } from '@angular/core/testing';

import { PostInputService } from './post-input.service';

describe('PostInputService', () => {
  let service: PostInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
