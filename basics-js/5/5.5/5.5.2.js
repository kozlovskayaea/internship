
// Работает, проходит тесты.

function filterRange(arr, min, max) {

    let newArr = [];

    for (i in arr) {

        if (arr[i] >= min && arr[i] <= max) {
            newArr.push(item);

        }

    }

    return newArr;
    
};

// Решение.

function filterRange(arr, a, b) {
    // добавлены скобки вокруг выражения для улучшения читабельности
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); // 3,1 (совпадающие значения)
  
  alert( arr ); // 5,3,8,1 (без изменений)

// Применяем метод .filter для arr, который фильтрует элементы через функцию '(item => (a <= item && item <= b)', и возвращает значения, при которых из функции возвращается 'true'ю