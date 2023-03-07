function printReverseList(list) {

    let arr = []; 
    let temp = list;

    while (temp) {
        arr.push(temp.value);
        temp = temp.next;
    }
    // Пока "существует" temp, добавляем текущее значение в массив, продвигаемся на шаг вперёд.

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log( arr[i] );
    }
    // Начиная с последнего добавленного в массив, выводим значения в обратном порядке.
};

function printReverseList2(list) {

    if (list.next) {
        printReverseList2(list.next);
    }
    // если "существует" следующее значение, применяем функцию к нему. От него будет находиться следующее и т.д.

    console.log (list.value); // Выводим текущее значение

}