let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

  // 1.

  let head1 = {
    glasses: 1
  };
  
  let table1 = {
    pen: 3,
    __proto__: head1
  };
  
  let bed1 = {
    sheet: 1,
    pillow: 2,
    __proto__: table1
  };
  
  let pockets1 = {
    money: 2000,
    __proto__: bed1
  };

  // 2. Через head1.glasses быстрее получить значение, потому что при получении значения через pockets1 придется выполнить всю цепочку поиска по прототипам
  // Ошибка, производительность будет одинакова при получении значений разными путями.