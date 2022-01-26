export default function (fn, duration = 100) {
  var timer = null;
  return (...arg) => {
    clearInterval(timer)
    timer = setTimeout(() => {
      fn(...arg);
    }, duration);
  }
}