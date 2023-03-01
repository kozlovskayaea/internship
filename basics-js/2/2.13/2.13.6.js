for (let num = prompt('Введите число'); ; ) {
    if (!(num > 100)) break;
}

// Решение
let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);