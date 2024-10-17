import { addTodo } from "../functions/addTodo";
import { borderButton } from "../buttons/img/borderdButton";
import { button } from "../buttons/text/button";
import { input } from "../infoElements/input";
import { line } from "../line";
import { selector } from "../infoElements/selector";

export function modal(wrapper, screenId, todoList, todosConfig) {
  const modal = document.createElement("div");
  wrapper.append(modal);

  modal.className = "lg:mx-64 md:mx-32 mx-8 mt-32 h-[490px] w-auto bg-white rounded-xl py-4 px-8"
  modal.innerHTML = `
    <div class="w-full h-auto flex justify-between items-center" id="title">
      <span class="font-semibold text-black md:text-custom-2 text-3xl">add a task:</span>
    </div>
    <div  id="lineWrapper"></div>
    <div  class="mt-8 font-semibold text-black text-2xl">description:</div>
    <textarea 
      class="w-full h-24 border-2 border-black-15 rounded-xl mt-4 font-semibold text-lg p-2"
      placeholder="like :code for one hour"
    ></textarea>
    <div class="font-semibold text-black text-2xl mt-4">deadline:</div>
    <div class="flex space-x-4 mt-4 w-full justify-center" id="selectionGroup"></div>
    <div class="w-full flex items-center justify-end mt-8" id="buttonWrapper"></div>
`
  const title = document.getElementById("title")
  borderButton(title, "/close.svg", () => {
    const screen = document.getElementById(screenId)
    screen.className = "hidden"
  })
  const lineWrapper = document.getElementById("lineWrapper")
  line(lineWrapper, "2px", "auto", ["16px", "0", "0", "0"]);

  const selectionGroup = document.getElementById("selectionGroup");
  input(selectionGroup, "hour", [1, 12]);
  input(selectionGroup, "minute", [0, 59]);
  selector(selectionGroup, "am/pm", ["AM", "PM"]);

  const buttonWrapprt = document.getElementById("buttonWrapper")
  button(buttonWrapprt, "add", () => addTodo(screenId, todoList, todosConfig));
}
