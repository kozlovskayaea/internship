function unique(arr) {
    /* ваш код */

    let set = new Set();

    for (value in values) {

        set.add(value);
        
    }

    return uniqueSet;

  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare,Krishna,:-O

  // Ошибка, нужно было ВО-ПЕРВЫХ вернуть МАССИВ (!), а во-вторых, воспользоваться возможностью при создании новой коллекции передавать перебираемый объект аргументом:

  function unique1(arr) {
    return Array.from(new Set(arr));
  }