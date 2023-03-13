// Function.prototype.defer(func) {

   // return setInterval(func, 1000);

// }

// Ошибка. Решение:

// Function.prototype.defer = function(ms) {
//    setTimeout(this, ms);
//  };