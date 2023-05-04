let sourceEmail = ['1234', 'zxvc12', 'iyu14', 'fght15', 'yuiyWq', '0987'];
let wrongEmail = ['zxvc12', 'iyu14', 'fght15'];

function filter(emailList, blackList) {
  let validEmail = [];
  for(let emailAdress of emailList) {
    if (!blackList.includes(emailAdress))
      validEmail.push(emailAdress);
  }
  console.log(validEmail)
  return validEmail;

}

filter(sourceEmail, wrongEmail)


//export default filter
