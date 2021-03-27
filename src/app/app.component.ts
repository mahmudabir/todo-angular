import { TodoList } from './todoList';
import { Component } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public get username(): string {
    return this.list.user;
  }


  public get itemCount(): number {
    return this.items.length;
  }

  public get items(): readonly TodoItem[] {
    return this.list.items.filter(item => !item.complete || this.showComplete);
  }
  private list = new TodoList('Bob', [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ]);

  showComplete = false;
  todoTextValue = '';

  // tslint:disable-next-line: typedef
  addItem(newItem: string) {
    // tslint:disable-next-line: triple-equals
    if (newItem != '') {
      this.list.addItem(newItem);
      this.todoTextValue = '';
    }
  }
}
