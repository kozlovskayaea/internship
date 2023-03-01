let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = /* ... ваш код ... */
    users.map(user => ({
        fullName: `${user.name} ${user.surname}`, 
        id: user.id
    })
);
// Используем метод .map, чтобы "пробежаться" по users и создать новый массив на основании результата вызова функции для каждого элемента массива!
// Функция определяет, что для каждого user, в массиве users создай fullName (соединив name и surname) и id, и положи его в новый массив (usersMapped).
// То есть, создается новый user для usersMapped! Его "наполнение" и определяет функция, которую мы пишем.

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин