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
    leftCount: 2,
    allCompleted: false
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
  removeTodoHandle: function (e) {
    var todos = this.data.todos
    var item = todos.splice(e.currentTarget.dataset.index, 1)[0]
    // splice返回值=>数组
    // console.log(item)
    var leftCount = this.data.leftCount - (item.completed ? 0 : 1)
    this.setData({
      todos: todos,
      leftCount: leftCount
    })
  },
  // 切换所有
  toggleAllHandle() {
    this.data.allCompleted = !this.data.allCompleted
    var todos = this.data.todos
    todos.forEach(item => {
      item.completed = this.data.allCompleted
    });
    this.setData({
      todos: todos,
      leftCount: this.data.allCompleted ? 0 : this.data.todos.length
    })
  },
  // 清除已完成的TODO(任务)
  clearHandle() {
    // var todos = []
    // this.data.todos.forEach(item => {
    //   if(!item.completed){
    //     todos.push(item)
    //   }
    // });
    var todos = this.data.todos.filter(item => {
      return !item.completed
    })
    this.setData({
      todos: todos
    })
  }


})