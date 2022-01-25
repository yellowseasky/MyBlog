export default function (timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const mount = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  let str = `${date.getFullYear()}-${mount}-${day}`;
  if(showTime) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const min = date.getSeconds().toString().padStart(2, "0");
    str += `${hours}-${minute}-${min}`
  }
  return str
}