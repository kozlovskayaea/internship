function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
  let rabbit = new Rabbit("Rabbit");

  // Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

// Да, эти вызовы делают одно и то же, а именно вызывают sayHi

// Ошибка. В первом вызове this == rabbit, во всех остальных this равен Rabbit.prototype, так как это объект перед точкой. Так что только первый вызов выведет Rabbit, а остальные – undefined.