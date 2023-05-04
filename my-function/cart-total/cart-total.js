function calculate(cartTotal, colProduct, promoCode = null) {
  let finalСost = cartTotal;

  if (promoCode === 'ДАРИМ300' && cartTotal < 300) {
    finalСost -= cartTotal;
    //console.log(`Цена корзины с промокодом 'ДАРИМ300' составит: ${finalСost} руб.`);
  }
  if (promoCode === 'ДАРИМ300' && cartTotal > 300) {
    finalСost = cartTotal - 300;
    //console.log(`Цена корзины с промокодом 'ДАРИМ300' составит: ${finalСost} руб.`);

  }
  if (colProduct >= 10) {
    finalСost -= ((finalСost / 100) * 5);
    //console.log(`Цена корзины со скидкой 5% составит: ${finalСost} руб.`);
  }
  if (finalСost > 50000) {
    finalСost -= (((finalСost - 50000) / 100) * 20);
    //console.log(`Цена корзины со скидкой 20% составит: ${finalСost} руб.`);
  }
  if (promoCode === 'СКИДКА15' && finalСost >= 20000) {
    finalСost -= ((finalСost / 100) * 15);
    //console.log(`Цена корзины со скидкой 15% составит: ${finalСost} руб.`);
  }
  console.log(`Общая стоимость карзины составит: ${finalСost}`);
  return finalСost;

};


//let cartTotal = 51000;
//let colProduct = 10;
//let promoCode = 'СКИДКА15';

calculate(50100, 11, 'ДАРИМ300') //тут подставьте значения
//export default calculate
