let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];


function sortByAge() {
    return arr
        .sort((a, b) => a.age > b.age ? 1 : -1);

}

// Применяем метод .sort, в котором в функции сравниваем два элемента (a и b), при этом указываем, что сравнивать необходимо age. Если a > b, то возвращаем 1 и сортировка поставит b раньше, чем а и наоборот.

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя