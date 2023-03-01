function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат?

  // 'John'

  // Ошибка. Потому что this в момент вычисления становится makeUser(), к которому нельзя добавить "точечный" синтаксис: makeUser().name, потому что это функция, а не объект.