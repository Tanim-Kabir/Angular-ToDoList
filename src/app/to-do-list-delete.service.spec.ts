import { TestBed } from '@angular/core/testing';

import { ToDoListDeleteService } from './to-do-list-delete.service';

describe('ToDoListDeleteService', () => {
  let service: ToDoListDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
