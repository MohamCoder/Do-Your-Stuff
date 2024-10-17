export function borderButton(parentElement,img,onClick) {
  const button = document.createElement("button");
  parentElement.append(button);

  button.className = "h-12 w-12 bg-white rounded-xl border-2 border-black flex justify-center items-center select-none"

  button.innerHTML = `
      <img class="w-6 h-6" src="${img}"/>
  `
  button.onclick = onClick
  button.type = "button"
}
