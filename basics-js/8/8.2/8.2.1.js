function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

// 1. 

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit1 = new Rabbit();

Rabbit.prototype = {};

alert( rabbit1.eats ); // ? undefined
// Ошибка, выведет true. Присвоение нового значения свойству Rabbit.prototype влияет на [[Prototype]] вновь создаваемых объектов, но не на прототип уже существующих. А значит alert вызовет то, что уже существовало, и выведет то, что было выведено раньше.


// 2. 

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit2 = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit2.eats ); // ? false
// Присвоение объекта по ссылке.


// 3.

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit3 = new Rabbit();

delete rabbit3.eats;

alert( rabbit3.eats ); // ? undefined
// Ошибка, выведет true. Операция delete применяется к свойствам конкретного объекта, на котором она вызвана. Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет. Таким образом, просто ничего не произойдёт.


// 4. 

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit4 = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit4.eats ); // ? undefined
// Свойство удалено из прототипа, оно больше не существует.