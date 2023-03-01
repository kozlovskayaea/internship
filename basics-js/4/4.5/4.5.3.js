function Accumulator(stringValue) {

    let value = Number(stringValue); // ошибка, должно быть this.value = stringValue;

    this.read = function() {
        this.value += Number(prompt('Введите число.', 0));

    }
}

let Accumulator = new Accumulator(1);

Accumulator.read();

alert(Accumulator.value);