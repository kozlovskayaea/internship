let user = {
    name: 'John',
    age: 30
  };

function count(obj) {
    
    return Object.entries(obj).length;

}

count();

// Работает в комплитяоре, не работает в песочнице.
// Потому, что .entries возвращает массив связку "ключ-значение", а нам нужно было вернуть свойства!

// Ответ.

function count(obj) {
    return Object.keys(obj).length;
  };