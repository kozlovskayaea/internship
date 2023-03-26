let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
        get (target, prop) {
            if (prop in target) {
                return target[prop];
                // reflect.get(target, prop, receiver)
            } else {
                throw new ReferenceError(`Свойство "${prop}" не существует`);
            }
        }
    });
  }
  
  user = wrap(user);
  
  alert(user.name); // John
  alert(user.age); // Ошибка: такого свойства не существует