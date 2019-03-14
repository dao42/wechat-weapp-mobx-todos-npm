import { decorate, observable, computed, action } from 'wechat-weapp-mobx/mobx';

import TodoItem from './todoItemStore'

class TodoStore {
  todos = [new TodoItem('今天要早起')]
  filters = [{ key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }]
  filter = 'SHOW_ALL'
  get filterTodos() {
    switch( this.filter ) {
      case 'SHOW_ALL':
        return this.todos;
      case 'SHOW_COMPLETED':
        return this.todos.filter( function(t) {
        return t.completed;
      });
      case 'SHOW_ACTIVE':
        return this.todos.filter( function(t) {
        return !t.completed;
      });
      default:
        throw new Error( 'Unknown filter: ' + filter );
    }
  }

  get totalCount() {
    return this.todos.length;
  }

  get currentCount() {
    return this.filterTodos.length;
  }

  addTodo(title) {
    this.todos.push( new TodoItem(title) );
  }

  findByTodoId(id) {
    var item = this.todos.find( function(element) {
      return element.id === id;
    })
    return item;
  }

}

decorate(TodoStore, {
  todos: observable,
  filters: observable,
  filterTodos: computed,
  totalCount: computed,
  currentCount: computed,
})

export default new TodoStore;
