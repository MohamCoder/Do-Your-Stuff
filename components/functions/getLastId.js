export function getLastId(todoList) {
  if (todoList.length === 0) {
    return -1
  }
  let lastId = 0
  todoList.forEach(todo => {
    if (todo.id > lastId) {
      lastId = todo.id
    }
  })
  return lastId
}
