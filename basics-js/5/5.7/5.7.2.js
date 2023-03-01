let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];



function aclean(arr) {

    let map = new Map(); // Создаем новую коллекцию

    for (let i = 0; i < arr.length; i++) {
        
        let item = arr[i]; 
        // console.log(item.split('')); // разделила каждый элемент массива на отдельный массив с буквами

        let newItem = item.toLowerCase
            .split('') // Приводим к одному регистру, разбиваем на буквы
            .sort // Меняем порядок букв
            .join(''); // Объединяем обратно

        map.Set(newItem, item) // Подсмотрела в ответе, создаем коллекцию ключ-значение Map, где ключ - новая строка newItem, а значение изначальная строка Item 
    }
   
    // return Array.from(new Set(newArr));

    return Array.from(map.values); // Создаем массив из значений коллекции Map
    
}

aclean(arr);
// Пыталась решить через создание Set.
// Решение.

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // разбиваем слово на буквы, сортируем и объединяем снова в строку
      let sorted = word.toLowerCase().split("").sort().join(""); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr1) );
