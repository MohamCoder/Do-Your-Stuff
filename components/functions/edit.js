export function edit(task, todosConfig) {
  const screen = document.getElementById("add")
  screen.className = "block"

  todosConfig.editing = true
  todosConfig.editTodo = task

  const textarea = document.querySelector("textarea")
  const hour = document.getElementById("hour")
  const minute = document.getElementById("minute")
  const ampm = document.getElementById("am/pm")

  let todoHour = task.deadline.getHours()
  const todoMinute = task.deadline.getMinutes()
  let todoAmPm = "AM"
  if (todoHour > 12) {
    todoHour -= 12
    todoAmPm = "PM"
  }

  hour.value = todoHour
  minute.value = todoMinute
  ampm.value = todoAmPm
  textarea.value = task.task
  textarea.focus()
}
