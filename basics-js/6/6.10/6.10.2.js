function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
  f();
  // Выведет "Вася", потому что нельзя изменить однажны привязанный контекст. Значит нет, мы не может изменить this дополнительным связыванием