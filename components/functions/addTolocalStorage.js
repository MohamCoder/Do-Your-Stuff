export function addToLocalStorage(todoList) {
  const todoListCopy = []
  let lastId = 0
  todoList.forEach(todo => {
    const todoCopy = {}
    todoCopy.interval = null
    todoCopy.id = lastId
    todoCopy.task = todo.task
    todoCopy.deadline = todo.deadline
    todoListCopy.push(todoCopy)
    lastId += 1
  })
  localStorage.setItem("todoList", JSON.stringify(todoListCopy))
}
