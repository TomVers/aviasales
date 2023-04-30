import { addMinutes } from 'date-fns'

export function convertDate(date) {
  const myDate = date
  return myDate.slice(11, 16)
}

export function getFinalTime(depDate, toDuration) {
  const myDate = new Date(depDate)
  const result = addMinutes(myDate, toDuration)
  return result.toISOString()
}
