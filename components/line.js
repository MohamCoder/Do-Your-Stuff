export function line(parentElement, hight = "1px", width = "100vw", margin = ["32px", "0px", "0px", "0px"]) {
  const line = document.createElement("div");
  parentElement.append(line);
  line.className = `bg-black opacity-10`;
  line.style.height = hight
  line.style.width = width
  line.style.marginTop = margin[0]
  line.style.marginRight = margin[1]
  line.style.marginBottom = margin[2]
  line.style.marginLeft = margin[3]
}
