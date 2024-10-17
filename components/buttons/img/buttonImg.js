export function buttonImg(parentElement,url,onClick) {
  const button = document.createElement("button");
  parentElement.append(button);
  let state = "black"
  button.className = 
    `h-12 w-12 bg-black rounded-xl flex justify-center items-center `
  button.innerHTML = `
      <img class="w-6 h-6 select-none filter-invert" src="${url}"/>
  `
  button.onclick = ()=>{
    if (state === "black") {
      button.className = "h-12 w-12 bg-white border-2 border-black rounded-xl flex justify-center items-center"
      button.children[0].className = "w-6 h-6"
      state = "white"
    } else {
      button.className = "h-12 w-12 bg-black rounded-xl flex justify-center items-center"
      button.children[0].className = "w-6 h-6 filter-invert"
      state = "black"
    }
    onClick.call()
  }
}
