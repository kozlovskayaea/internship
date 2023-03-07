let factorial = function(num) {

    if (num == 1) return num;
    return num * (factorial(num - 1));

}

// Примеры решений: 

function factorial1(n) {
    return (n != 1) ? n * factorial1(n - 1) : 1;
  }
  
function factorial2(n) {
    return n ? n * factorial2(n - 1) : 1;
  }