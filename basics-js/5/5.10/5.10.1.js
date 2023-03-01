let user = {
    name: "John",
    years: 30
  };

  let {name, years, isAdmin: isAdmin} = user;

  // Решение

  let {name1, years: age // Свойство и переменная называются по разному
  , isAdmin1 = false // false по умолчанию, если отсутствует
} = user;