import { borderButton } from "./buttons/img/borderdButton";
import { button } from "./buttons/text/button";
import { addToLocalStorage } from "./functions/addTolocalStorage";
import { countDown } from "./functions/countDown";
import { edit } from "./functions/edit";
export function todoElement(parentElement, task, todoList, todosConfig) {
  const todo = document.createElement("div");
  parentElement.append(todo);

  todo.id = task.id
  todo.className = "flex justify-between h-auto w-full"

  todo.innerHTML = `
    <div class="flex items-center">
      <div class="h-2 w-2 rotate-45 bg-white border-black inline-block border-2 fdtranslate-y-[29px]"></div>
      <span class="flex flex-col ml-4">
        <span class="font-semibold text-2xl">${task.task}</span>
        <span class="font-semibold text-custom-1 text-gray-500" id="${task.id + "deadline"}"></span>
      </span>
    </div>
    <div id="${task.id + "buttonGroup"}"></div>
  `
  let interval = null
  if (!todosConfig.isCountDown) {
    interval = null
    const deadline = document.getElementById(task.id + "deadline")
    deadline.innerHTML = task.deadline
  } else {
    interval = countDown(task.deadline, task.id)
  }
  const buttonGroup = document.getElementById(task.id + "buttonGroup")
  buttonGroup.className = "flex space-x-4"
  borderButton(buttonGroup, "/edit.svg", () => {
    edit(task, todosConfig)
  })
  button(buttonGroup, "done", () => {
    const todos = document.getElementById("todos")
    interval && clearInterval(interval)
    todos.removeChild(todo)
    todoList.splice(todoList.findIndex(todo => todo.id === task.id), 1)
    addToLocalStorage(todoList)
  })
  return interval
}
