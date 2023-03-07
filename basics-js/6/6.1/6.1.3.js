// "Долгое" решение

let fib = function(num) {

    if (num == 1) return num;

    return ( fib(n-1) + fib(n-2) );

};

// Решение через цикл

let fib1 = function(num) {

    let a = 1; 
    let b = 1;
    // Создаем переменные, равные fib1(1) и fib1(2)

    for (let i = 3; i <= n; i++) {

        let c = a + b;
        a = b;
        b = c;

    }
    // В цикле переставляем переменные, получая новую последовательность на каждом шаге
    
    return b;

}