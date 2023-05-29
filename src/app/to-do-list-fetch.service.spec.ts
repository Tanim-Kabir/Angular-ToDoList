import { TestBed } from '@angular/core/testing';

import { ToDoListFetchService } from './to-do-list-fetch.service';

describe('ToDoListFetchService', () => {
  let service: ToDoListFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
