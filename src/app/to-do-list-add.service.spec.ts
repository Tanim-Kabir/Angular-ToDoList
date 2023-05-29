import { TestBed } from '@angular/core/testing';

import { ToDoListAddService } from './to-do-list-add.service';

describe('ToDoListAddService', () => {
  let service: ToDoListAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
