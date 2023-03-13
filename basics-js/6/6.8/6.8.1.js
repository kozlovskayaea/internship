function printNumbers1(from, to) {

    for (let i = from; i <= to; i++) {
        return setInterval(() => console.log(i), 1000);
    }
    

};

function printNumbers2(from, to) {

    let i = from;

    setTimeout(function tick() {
        console.log(i);

        if (i < to) {
            setTimeout(tick, 1000);
        } // если i меньше конечного значения, вызываем функцию tick, которая выводит i каждые 1000мс

        i++;

    }, 1000); // выводим i каждые 1000 мс

}