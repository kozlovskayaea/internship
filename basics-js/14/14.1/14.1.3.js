function makeObservable(target) {
    target[handlers] = []; // Создаем хранилище обработчиков 
    
    target.observe = function(handler) {
        this[handlers].push(handler);
    }; // Создаем метод, который будет добавлять обработчики (handler) в хранилище обработчиков

    return new Proxy(target, {
        set(target, property, value, receiver) {
            let success = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
            if (success) {
                target[handlers].forEach(handler => handler(property, value));
                // Если не произошло ошибки при записи свойства, вызываем обработчики
            }
            return success;
        }
    })
  }
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });
  
  user.name = "John"; // выводит: SET name=John