Function.prototype.defer = function(ms) {
    let f = this; // Сохраняем значение this, чтобы не потерять контекст
    return function(...args) { // Возвращаем обёртку
        setTimeout(() => f.apply(this, args), ms); // Откладываем вызов функции с сохранённым контекстом
    }
};