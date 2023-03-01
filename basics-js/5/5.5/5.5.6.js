function Calculate(str) {
    
    
    let arr = str.split(' ');
    if (arr[1] == '+') {
        return Number(arr[0]) + Number(arr[2]);
    } else if (arr[1] == '-') {
        return Number(arr[0]) - Number(arr[2]);
    } else {
        return 'Ошибка';
    }
   

};

function addMethod(name, func) {


}

Calculate('3 + 7');

// Решение.

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  }; // Указываем метод: что должен делать каждый операнд.

  this.calculate = function(str) { // описываем метод для функции Calculator.

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2] // Присваиваем каждой части выражения соответствующий item массива, который получился после применения метода .split к строке.

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    } // Проверка на ошибку, если операнд НЕ является ни одним методом из this.methods или числа a или b являются NaN, то возвращаем NaN.

    return this.methods[op](a, b); // Если if не true, то возвращаем нужный метод.
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }; // Добавляем метод, который может добавлять методы.
}