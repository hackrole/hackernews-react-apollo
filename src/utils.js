function timeDifference(current, previous){
  const milliSecondsPerMinute = 60 * 1000
  const millSecondsPerHour = milliSecondsPerMinute * 60
  const milliSecondsPerDay = millSecondsPerHour * 24
  cosnt milliSecondsPerYear = milliSecondsPerDay * 365

  const elapsed = current - previous
  if (elapsed < milliSecondsPerMinute /3 ){
    return 'just now'
  }
  if (elapsed < milliSecondsPerMinute){
    return 'less than 1 min ago'
  } else if(elapsed < millSecondsPerHour){
    return Math.round(elapsed / milliSecondsPerMinute) + ' min ago'
  }else if (elapsed < milliSecondsPerDay){
    return Math.round(elapsed / millSecondsPerHour) +  ' h ago'
  }else if (elapsed < milliSecondsPerMonth) {
    return Math.round(elapsed / milliSecondsPerDay) + ' days ago'
  } else if (elapsed < milliSecondsPerYear) {
    return Math.round(elapsed / milliSecondsPerMonth) + ' mo ago'
  } else {
    return Math.round(elapsed / milliSecondsPerYear) + ' years ago'
  }
}

export function timeDifferenceForDate(date){
  const now = new Date().getTime()
  const updated = new Date(date).getTime()
  return timeDifference(now, updated)
}
