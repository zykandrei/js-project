let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
]

function filter(objects, key, propName) {
  let result = [];
  for (let object of objects) {
    if (object[key] === propName) {
      result.push(object);
      console.log(result);
    }
  }
  return result;
}

filter(objects, 'surname', 'Петров'); //введите сюда данные, вывод в консоль командой node object-array-filter.js важно быть в этой папке.
