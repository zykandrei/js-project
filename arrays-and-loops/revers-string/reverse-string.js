// str (входная строка) будет задаваться в момент вызова функции, как в примере кода под ней
function reverseString(str) {
  let aReversed = [];
  // let str = ('Привет, мир!');

  for (let i = str.length - 1; i >= 0; i--) {
    aReversed.push(str[i]);
  }
  let bReversed = aReversed.join('');
  console.log(bReversed);
  // ваш код здесь
}

// вызов функции
reverseString('abc'); // cba
reverseString('12345'); // 54321
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
//export default reverseString;
