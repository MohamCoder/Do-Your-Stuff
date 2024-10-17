export function input(parentElement ,id ,range) {
  const input = document.createElement("input");
  parentElement.append(input);
  input.className = "h-12 w-12 bg-white rounded-xl border-2 border-black font-semibold text-xl"
  input.id = id
  input.type = "number"
  input.min = range[0]
  input.max = range[1]
  input.value = range[0]
  input.onchange = (e) => {
    if (e.target.value > range[1])  e.target.value = range[1]
    if (e.target.value < range[0])  e.target.value = range[0]
  }
}
