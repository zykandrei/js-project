// roadMines (массив ячеек поля) будет задаваться в момент вызова функции, как в примере кода под ней
function moveTank(roadMines) {
  let life = 2;
  for (let i = 0; i < roadMines.length; i++) {
    if (roadMines[i] === true) {
      life -= 1;
      if (life === 1) {
        console.log('танк поврежден');
        console.log(`танк переместился на ${i + 1}`);
      } else if (life === 0) {
        console.log(`танк переместился на ${i + 1}`);
        console.log('танк уничтожен');
        break;
      }
    } else {
      console.log(`танк переместился на ${i + 1}`);
    }
  }
}

// вызов функции

moveTank([false, false, false, false, false, false, false, false, false, false]); // танк проедет по полю без мин или....

// можете вызывать функцию сколько угодно раз подряд с различными параметрами False или True

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
//export default moveTank;
