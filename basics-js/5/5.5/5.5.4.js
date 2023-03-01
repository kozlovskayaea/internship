let arr = [5, 3, 8, 1, 12, 14, 21, 2, 10];

arr.sort(function(a, b) {
    return b - a;
    
}); // Используем метод .sort для перебора массива "на месте"

console.log(arr);

// Решение.

arr.sort((a, b) => b - a);