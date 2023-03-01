let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
    for (key in obj) {

        if (typeof(obj[key]) === Number) {
            obj[key] = obj[key] * 2;
        }

    }

  }

  //  Не справилась без решения.

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

  // Ошибка была в 'number' != Number. При замене значения на 'number' тесты проходят.