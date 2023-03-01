let arr = []

function shuffle(arr) {

    return arr
    .sort(() => Math.random() - 0.5); // Вызываем функцию, которая выдает псевдорандомное число от 0 до 1, и отнимаем 0,5, таким образом "случайно" получая то положительное, то отрицательное число, которое влияет на сортировку.    
};

// Решение.
function shuffle1(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }