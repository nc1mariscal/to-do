import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  private title:string = 'My Todos';
  private todoList;

  constructor(private todoListService:TodoListService) {
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title:string) {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

  changeItemTitle({item, newTitle}) {
    this.todoListService.changeItemTitle(item, newTitle);
  }
}
