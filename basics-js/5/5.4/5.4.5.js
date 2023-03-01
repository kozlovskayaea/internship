// Не смогла решить без разбора ответа.

let arr = [];

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0; // Объявляем переменные.

    for (let item of arr) { // Перебор по элементам в массиве.
        partialSum += item; // Добавляем в частичнную сумму.
        maxSum = Math.max(maxSum, partialSum); // Присваиваем переменной maxSum максимум на данный момент.
        if (partialSum < 0) partialSum = 0; // Если частичная сумма меньше 0, присваеваем ей 0, при этом последнее максимальное значение остается в переменной maxSum!

    }
    
    return maxSum;


}
