export function getBirthday(date) {
  const birthday = new Date(date);
  const today = new Date();
  let years = today.getFullYear() - birthday.getFullYear();
  birthday.setFullYear(today.getFullYear());
  if (today < birthday) {
    // eslint-disable-next-line
    years--;
  }
  return years;
}
export function go(arr) {
  if (arr.length < 3) {
    return 'There are less than 3 people in table';
  }
  return getBirthday(arr[0]) + getBirthday(arr[1]) + getBirthday(arr[2]);
}
