import { line } from "../../components/line.js";
import { configBar } from "./configBar.js";
import { todos } from "./todos.js";
export function hero(parentElement, todoList, todosConfig) {
  const hero = document.createElement("hero");
  parentElement.append(hero);
  hero.className = "mt-32 block"
  configBar(hero, todoList, todosConfig);
  todos(hero, todoList, todosConfig);
}
