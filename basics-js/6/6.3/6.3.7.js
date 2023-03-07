function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  


  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

  function makeArmy2() {
    let shooters = [];
  
    for (let i = 0; i < 10; i++) {
        let shooter = function() { // shooter function
          alert( i ); // should show its number
        };
        shooters.push(shooter);
      }
      return shooters;
    }
  
  
  let army2 = makeArmy2();
  
  army2[0](); // у 0-го стрелка будет номер 10
  army2[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


  // Проблема была в том, что i всегда равна 0, потому что находилась снаружи цикла и во время следующего вызова была такой же.
  // Можно решить данную задачу не меняя цикл while на for, а просто создав дополнительную переменную-счетчик внутри while