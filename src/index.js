module.exports = function reverse (n) {
  if (n < 0) return reverse(-1*n);     //превращаем отрицательные значения в положительные
  const str = n.toString();             //преобразуем число в строку
  const arr = str.split('').reverse().join('');     //разделяем строку на компоненты, преобразуем  в массив, певеворачиваем массив, соединяем в обратно в строку
  return Number(arr);                       //превращаем строку в число
}
