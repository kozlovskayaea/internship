function filerRangeInPlace(arr, a, b) {
    
    for (let i = 0; i < arr.length; i++) { // Перебираем массив.

        let value = arr[i]; // Присваиваем значение на каждой итерации переменной.

        if (value < a || value > b) { // Если значение за пределами интервала.
            arr.splice(i, 1); // Удали с индекса i (текущий) 1 элемент (текущий)
            i--; // Уменьши индекс (т.к. удалено 1 значение, оставшиеся "сдвинулись" на это место).

        }
    }


}