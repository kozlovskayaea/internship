function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  // askPassword(?, ?); // ?
  askPassword(user.login.bind(user));

  // Ошибка

  // Решение
  askPassword(() => user.login(true), () => user.login(false));
  // Стрелочная функция-обёртка


  // Или
  askPassword(user.login.bind(user, true), user.login.bind(user, false));

  // Нужно вместе с привязкой передавать аргументы, и должно было передаваться изначально два аргумента в askPassword с true и false значениями соответственно