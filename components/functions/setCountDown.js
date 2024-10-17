export function setCountDown(deadline, id) {
  const now = new Date().getTime();
  const distance = deadline - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    const todos = document.getElementById("todos");
    const todo = document.getElementById(id)
    todos.removeChild(todo)
    return true
  }

  const countDown = document.getElementById(id + "deadline");
  countDown.innerHTML = `time left ${hours}:${minutes}:${seconds}`

  return false
}

