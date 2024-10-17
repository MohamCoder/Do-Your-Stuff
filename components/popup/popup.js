import { modal } from "./modal";
export function popup(id, todoList, todosConfig) {
  const screen = document.createElement("div");
  screen.className = "hidden";
  document.body.append(screen);
  screen.id = id

  const background = document.createElement("div");
  screen.append(background);
  background.className = "h-[100vh] w-[100vw] bg-black opacity-50 absolute top-0 left-0 z-10"

  const wrapper = document.createElement("div");
  screen.append(wrapper);
  wrapper.className = "absolute top-0 left-0 w-full h-full z-20"
  modal(wrapper, id, todoList, todosConfig)
}
