class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      this.name = name;
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  alert(rabbit.name);

  // Нужно поставить вызов super() внутри конструктора класса Rabit, чтобы был создан объект для this. Без этого вызова, в дочернем конструкторе этого не происходит.