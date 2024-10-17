export function selector(parentElement, id, items) {
  const selector = document.createElement("select");
  parentElement.append(selector);
  selector.id = id
  selector.className = "h-12 w-12 bg-white rounded-xl rounded-xl border-2 border-black font-semibold text-xl"
  items.forEach(item => {
    selector.innerHTML += `
      <option class="text-black text-custom-1 font-semibold">${item}</option>
    `
  })
}
