function Calculator() {
    
    this.read = function(num1, num2) {
        this.num1 = prompt('Введите первое число.');
        this.num2 = prompt('Введите второе число.');
    },

    this.sum = function(num1, num2) {
    
        return (this.num1 + this.num2);

    },

    this.mul = function(num1, num2) {

        return (this.num1 * this.num2);

    }

};

// Не понимаю, почему в решении написано: "this.read = function()", то есть нет параметров функции.


// Из решения.
let calculator = new Calculator();
calculator.read(1, 2);
