import { setCountDown } from "./setCountDown"
export function countDown(deadLine, id) {
  setCountDown(deadLine, id)

  const interval = setInterval(() => {
    const isOver = setCountDown(deadLine, id)

    if (isOver) clearInterval(interval)
  }, 1000)
  return interval
}

