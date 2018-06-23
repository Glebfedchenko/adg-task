export function getBirthday(date) {
  var birthday = new Date(date);
  var today = new Date();
  var years = today.getFullYear() - birthday.getFullYear();
  birthday.setFullYear(today.getFullYear());
  if (today < birthday) {
    years--;
  }
  return years;
}
export function go(arr) {
  if (arr.length < 3) {
    return `There are less than 3 people in table`;
  } else {
    return getBirthday(arr[0]) + getBirthday(arr[1]) + getBirthday(arr[2]);
  }
}
