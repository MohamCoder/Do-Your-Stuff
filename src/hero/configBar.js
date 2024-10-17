import { sortTodos } from "../../components/functions/sortTodos";
import { buttonImg } from "../../components/buttons/img/buttonImg";
import { line } from "../../components/line";
export function configBar(parentElement, todoList, todosConfig) {
  const configBar = document.createElement("div");
  parentElement.append(configBar);
  const wrapper = document.createElement("div");
  configBar.append(wrapper);
  configBar.className = "lg:mx-64 md:mx-32 mx-8"
  wrapper.className = "flex justify-between items-center "
  wrapper.innerHTML = `
    <span class="font-semibold text-black md:text-custom-2 text-3xl">your tasks:</span>
    <div class="flex space-x-4" id="buttonGroup"></div>
  `
  const buttonGroup = document.getElementById("buttonGroup");
  buttonImg(buttonGroup, "/time.svg", () => {
    todosConfig.isCountDown = !todosConfig.isCountDown
    sortTodos(todoList, todosConfig)
  })
  buttonImg(buttonGroup, "/sort.svg", () => {
    if (todosConfig.sortType === "asc") {
      todosConfig.sortType = "desc"
      todosConfig.sortMethod = (a, b) => b.deadline - a.deadline
      sortTodos(todoList, todosConfig)
      return
    }
    todosConfig.sortType = "asc"
    todosConfig.sortMethod = (a, b) => a.deadline - b.deadline
    sortTodos(todoList, todosConfig)
  })
    line(configBar, "2px", "auto" , ["8px", "0", "0", "0"]);
}
