// count, n и m будут задаваться в момент вызова функции, как в примере кода под ней
function randomArray(count, n, m) {
  let x = [];
  // let n = -5;
  // let m = -2;
  // let count = 30;
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  let range = Math.abs(max - min);
  for (let i = 0; i < count; i++) {
    x.push(Math.round((Math.random() * range) + min));
  }
  console.log(x);
  // ваш код здесь
}

// вызов функции
randomArray(10, 10, 100); // вывести массив из 10-ти случайных чисел от 10 до 100
//randomArray(2, 5, 1); // вывести массив из 2-х случайных чисел от 1 до 5
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
//export default randomArray;
