export function button(parentElement,text,onClick) {
  const button = document.createElement("button");
  parentElement.append(button);
  button.className = "h-12 w-24 bg-black rounded-xl"
  button.innerHTML = `
    <span 
      class='text-white text-custom-1 font-black select-none'
      >
      ${text}
    </span>`
  button.onclick = onClick
  button.type = "button"
}
