export function calculateDeadline() {
  const hour = parseInt(document.getElementById("hour").value)
  const minute = parseInt(document.getElementById("minute").value)
  const amPm = document.getElementById("am/pm").value

  const isPM = amPm === "PM"
  const date = new Date()
  const todoHours = isPM ? hour + 12 : hour
  const tododMinutes = minute

  if (date.getHours() > todoHours ||
     (date.getHours() === todoHours && date.getMinutes() > tododMinutes)){
    date.setDate(date.getDate() + 1)
  }

  date.setHours(todoHours)
  date.setMinutes(tododMinutes)
  date.setSeconds(0)
  date.setMilliseconds(0)
  
  return date
}
