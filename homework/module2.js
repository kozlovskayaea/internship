// 2. Написать модуль, который способен выполнять операции с числами любой длины.
// 4 метода для сложения, умножения, вычитания и деления.




function sum(num1, num2) {

    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        return Number(num1) + Number(num2);

     } else if (typeof(num1) === 'bigint' || typeof(num2) === 'bigint') {
        return BigInt(num1) + BigInt(num2);

     } else {
        return 'Введите корректные данные.'
     };

};

function multiply(num1, num2) {

        if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        return Number(num1) * Number(num2);

     } else if (typeof(num1) === 'bigint' || typeof(num2) === 'bigint') {
        return BigInt(num1) * BigInt(num2);
        
     } else {
        return 'Введите корректные данные.'
     };

};

function subtraction(num1, num2) {

        if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        return Number(num1) - Number(num2);

     } else if (typeof(num1) === 'bigint' || typeof(num2) === 'bigint') {
        return BigInt(num1) - BigInt(num2);
        
     } else {
        return 'Введите корректные данные.'
     };

};

function division(num1, num2) {

        if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        return Number(num1) - Number(num2);

     } else if (typeof(num1) === 'bigint' || typeof(num2) === 'bigint') {
        return BigInt(num1) - BigInt(num2);
        
     } else {
        return 'Введите корректные данные.'
     };

};