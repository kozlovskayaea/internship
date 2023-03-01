function unique(arr) {
    /* ваш код */

    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
       
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }

    }
    return uniqueArr;
  }
  
  let strings1 = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O


  // Решение.

  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O