"use strict";

function solveEquation(a, b, c) {
  let arr;
  let x1, x2;
  let D = b**2 - 4*a*c;  
  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    x1 = -b/(2*a);
    arr = [x1];
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D))/(2*a); 
    x2 = (-b - Math.sqrt(D))/(2*a);
    arr = [x1, x2];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {  
  let totalAmount; //сумма, которую придется заплатить клиенту
  let sumReturn; //сумма, которую необходимо вернуть банку
  let n; //количество месяцев, на которые был выдан кредит
  let p; //1/12 процентной ставки (от 0 до 1)
  let payment; //ежемесячная плата
  
  percent = parseInt(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);
  
  if (Number.isNaN(percent)) {    
    return `Параметр "Процентная ставка" содержит неправильное значение "test"`;    
  } else if (Number.isNaN(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение "test"';    
  } else if (Number.isNaN(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение "test"';    
  } else {
    sumReturn = amount - contribution;
    n = Math.round(((date.getTime() - Date.now())/(24*3600*1000))/30.5);     
    p = (percent/100)/12;
    payment = sumReturn*(p + (p/(((1 + p)**n) - 1)));
    totalAmount = Math.round((payment*n)*100)/100;    
  }
  console.log(`Сумма, которую в итоге заплатит клиент - ${totalAmount}`);    
  return totalAmount;
}