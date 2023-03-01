const readNumber = function() {

    let num = Number(prompt('Введите число.', 0));

    return (num == '') ? null : num;

}

readNumber();

// Решение.

function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`);

// Не учла необходимость цикла и случай 'null'.