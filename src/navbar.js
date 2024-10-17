import { button } from "../components/buttons/text/button";
import { popup } from "../components/popup/popup";

export function navBar(parentElement,todoList,todosConfig) {
  const navBar = document.createElement("navBar");
  parentElement.appendChild(navBar);

  navBar.className = "flex justify-between items-center lg:mx-32 md:mx-16 mx-8 mt-8"
  navBar.innerHTML = `
      <span class="font-black text-black md:text-custom-2 text-3xl">
        do 
        <span class="font-outline-2 text-white">your</span>
        stuff
      </span>
`
  const id = "add"
  popup(id,todoList,todosConfig)
  button(navBar, "add", () => {
    const modal = document.getElementById(id)
    const textarea = document.querySelector(`textarea`)
    textarea.value = ""
    modal.className = "block"
  })
}
