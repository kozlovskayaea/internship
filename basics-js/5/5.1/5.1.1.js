let str = "Привет";

str.test = 5;

alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

// Мы не можем добавить свойство строке, потому что это примиттив.

// Верно, в зависимости от наличия 'use strict' может быть ошибка (с) или undefined (без).