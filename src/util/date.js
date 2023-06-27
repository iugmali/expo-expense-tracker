export function getFormattedDate(date) {
  return `${date.getFullYear()}-${(date.getMonth() < 9) ? '0' : ''}${date.getMonth() + 1}-${(date.getDate() < 10) ? '0' : ''}${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
