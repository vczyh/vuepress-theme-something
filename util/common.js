export function getTimeStamp(date) {
  if (date) return new Date(date).getTime()
  const time = new Date().getTime()
  return time
}

export function formatDate(date) {
  const time = date ? new Date(date) : new Date();
  const month = time.getMonth() < 10 ? '0' + time.getMonth() : time.getMonth()
  const day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
  return [time.getFullYear(), month, day].join('-')
}


export function formatMonthAndDay(date) {
  const time = date ? new Date(date) : new Date();
  const month = time.getMonth() < 10 ? '0' + time.getMonth() : time.getMonth()
  const day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
  return [month, day].join('-')
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}