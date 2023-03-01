function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  // Передаем в функцию массив.
  // Применяем метод .reduce, в который передаем callback-функцию obj и начальное значение value.
  // 