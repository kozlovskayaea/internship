let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  

function sumSalaries() {
    
    let newObject = Object.values(salaries);
    
    let sumSalary = 0;
    
    for (let salary of newObject) {
        sumSalary += salary;
    
    }
    
    return sumSalary;
}


  alert( sumSalaries(salaries) );

  // При проверке в компиляторе с пустым объектом выводит "0", но в "песочнице" от учебника не проходит тест.

  // Решение.

  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {  // Можно было не объявлять отдельную переменную Object.values(salaries), а сразу использовать ее в цикле
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650

  // Или 

  // reduce перебирает массив значений salaries,
// складывает их
// и возвращает результат
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
  }