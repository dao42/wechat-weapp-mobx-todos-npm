var observable = require('wechat-weapp-mobx/mobx').observable;
var extendObservable = require('wechat-weapp-mobx/mobx').extendObservable;

var nextTodoId = 0
var TodoItemStore = function(title) {
  nextTodoId ++;

  extendObservable(this, {
    title: title,
    id: nextTodoId,
    completed: false,
    get ids() {
      return this.id + ": " + this.title;
    }
  });
}

module.exports = {
  default: TodoItemStore,
}
