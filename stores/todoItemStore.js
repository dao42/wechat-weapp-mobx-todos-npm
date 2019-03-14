import { decorate, observable, computed } from 'wechat-weapp-mobx/mobx'

var nextTodoId = 0
class TodoItemStore {
  constructor(title) {
    this.title = title;
  }

  title = null
  id = nextTodoId++
  completed = false
  get ids() {
    return this.id + ": " + this.title;
  }
}

decorate(TodoItemStore, {
  title: observable,
  id: observable,
  completed: observable,
  ids: computed,
})

export default TodoItemStore;