// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: '',
    todos: [{
      name: "Learning HTML",
      completed: false
    }, {
      name: "Learning HTML2",
      completed: true
    }, {
      name: "Learning HTML3",
      completed: false
    }],
    leftCount: 2
  },
  // input内容改变
  inputChangeHandle: function (e) {
    this.setData({
      input: e.detail.value
    })
  },
  // 添加
  addTodoHandle: function () {
    if (!this.data.input) return
    var todos = this.data.todos
    todos.push({
      name: this.data.input,
      completed: false
    })
    this.setData({
      todos: todos,
      input: '',
      leftCount: this.data.leftCount + 1
    })
  },
  // 切换状态
  toggleTodoHandle: function (e) {
    var item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    // 根据切换后状态进行leftCount修改
    var leftCount = this.data.leftCount + (item.completed ? -1 : 1)
    this.setData({
      todos: this.data.todos,
      leftCount: leftCount
    })
  },
  // 删除
  removeTodoHandle:function(e){
    var todos = this.data.todos
    todos.splice(e.currentTarget.dataset.index,1)
    this.setData({
      todos:todos
    })
  }


})