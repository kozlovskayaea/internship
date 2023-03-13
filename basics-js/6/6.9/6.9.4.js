// Решение. (яннп)

function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis; // Возможные состояния переменной
  
    function wrapper() {
  
      if (isThrottled) { // (2) 
        savedArgs = arguments;
        savedThis = this;
        return;
      } // Запоминаем вызовы в savedArgs и savedThis
  
      func.apply(this, arguments); // (1) вызываем func и устанавливаем состояние задержки isThgrottled = true
  
      isThrottled = true; 
  
      setTimeout(function() {
        isThrottled = false; // (3) Сбрасываем состояние задержки.
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        } // Добавляем последние добавленные аргументы и контекст.
      }, ms);
    }
  
    return wrapper;
  }