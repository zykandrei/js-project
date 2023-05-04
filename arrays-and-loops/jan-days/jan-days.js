// firstWeekDay будет задаваться в момент вызова функции, как в примере кода под ней
function januaryDays(firstWeekDay) {
  let day = [];
  let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

  // let firstday = 'вторник'
  let indexWeek = week.indexOf(firstWeekDay);
  for (let i = 1; i <= 31; i++) {
    day.push(i);
  }
  for (let i = 0; i < week.length; i++) {
    if (week[i] === firstWeekDay) {
      indexWeek = i;
    }
  }
  for (let elem of day) {
    let j = (indexWeek + elem - 1) % 7;

    console.log(`${elem} января, ${week[j]}`);
  }
}

// выполнение кода внутри функции
//januaryDays('понедельник'); // вывести все дни недели января, если 1-я января - понедельник
januaryDays('среда'); // вывести все дни недели января, если 1-я января - среда
//januaryDays('воскресенье'); // вывести все дни недели января, если 1-я января - воскресенье
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
//export default januaryDays;
