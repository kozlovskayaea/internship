// Ошибка будет потому, что мы не вызвали родительский конструктор


// Дано

class Rabbit extends Object {
    constructor(name) {
        super(); // Добавлено
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Кроль");
  
  alert( rabbit.hasOwnProperty('name') ); // Ошибка


  