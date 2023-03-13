function User(name) {
    this.name = name;
  }
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  alert( user2.name ); // Pete (сработало!)

  // Сработадл, потому что User.prototype.constructor == User

  // Но

  function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user1 = new User('John');
let user21 = new user.constructor('Pete');

alert( user21.name ); // undefined

// Сначала ищется свойство constructor в объекте user. Не нашлось.
// Потом задействуется поиск по цепочке прототипов. Прототип объекта user – это User.prototype, и там тоже нет искомого свойства.
// Идя дальше по цепочке, значение User.prototype – это пустой объект {}, чей прототип – встроенный Object.prototype.
// Наконец, для встроенного Object.prototype предусмотрен встроенный Object.prototype.constructor == Object. Таким образом, свойство constructor всё-таки найдено.