import { TestBed, inject } from '@angular/core/testing';

import { TodoListStorage.Service,ts,Service } from './todo-list-storage.service,ts,.service';

describe('TodoListStorage.Service,ts,Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListStorage.Service,ts,Service]
    });
  });

  it('should be created', inject([TodoListStorage.Service,ts,Service], (service: TodoListStorage.Service,ts,Service) => {
    expect(service).toBeTruthy();
  }));
});
