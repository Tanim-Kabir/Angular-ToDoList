import { TestBed } from '@angular/core/testing';

import { ToDoListEditService } from './to-do-list-edit.service';

describe('ToDoListEditService', () => {
  let service: ToDoListEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
