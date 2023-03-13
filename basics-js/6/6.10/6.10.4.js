function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  let askPassword = askPassword.bind(user);
  askPassword(user.loginOk, user.loginFail);

  // Решение:
  // askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
  // или 
  // askPassword(() => user.loginOk(), () => user.loginFail());