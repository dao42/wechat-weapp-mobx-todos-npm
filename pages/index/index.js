import { observer } from 'wechat-weapp-mobx/observer'
import { action } from 'wechat-weapp-mobx/mobx'

import todoStore from '../../stores/todoStore'

Page(observer({
  props: {
    todoStore: todoStore
  },

  handleCheck: function(e) {
    var todoId = parseInt( e.target.dataset.id );
    var status = this.props.todoStore.findByTodoId(todoId).completed;
    this.props.todoStore.findByTodoId(todoId).completed = !status;
  },

  applyFilter: action(function(e) {
    this.props.todoStore.filter = e.target.dataset.key;
  }),

  todosFiltered: function(){
    return this.props.todoStore.filterBy();
  },

  addTodo: function(e) {
    var title = e.detail.value.todo;
    this.props.todoStore.addTodo(title);
  }
}))
