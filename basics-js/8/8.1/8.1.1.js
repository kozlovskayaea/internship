let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // ? (1) true
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2) null
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3) null. Ошибка, будет undefined, потому что такого свойства больше нет. Я думала, что будет искать дальше ("выше") дойдет до null как описано в теории. НО! Дойдя до null js не найдет это свойство и вернет undefined.

