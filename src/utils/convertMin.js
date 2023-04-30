export function convertMin(min) {
  const hours = Math.floor(min / 60)
  const minutes = min - hours * 60
  return hours + 'ч ' + minutes + 'м'
}
