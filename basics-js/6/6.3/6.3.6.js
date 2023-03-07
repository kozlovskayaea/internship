function byField(field) {
    
    return function(a, b) {
        return a.field > b.field ? 1 : -1;
    }
}


// Ошибка. Обращаюсь к полю field (который и не находится), а не ищу переданный 'field' внутри объектов
// Решение.

function byField(field) {

    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  