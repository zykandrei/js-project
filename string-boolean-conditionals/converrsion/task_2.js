let name = 'aNdREi';
let surname = 'Zyk';

let resultName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
let resultSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();

console.log(resultName + '\-' + (resultName === name ? 'имя осталось без изменений' : 'имя было преобразовано'));
console.log(resultSurname + '\-' + (resultSurname === surname ? 'имя осталось без изменений' : 'имя было преобразовано'));