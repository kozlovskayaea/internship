function inBetween(a, b) {

    return function(x) {
        return x >= a && x <= b;
    }

}

alert( arr.filter(inBetween(3, 6)) ); 

// Нужно, чтобы после .filter была функция, с помощью которой данный метод и будет проводить "отбор".
// Соответственно, нужно написать функцию, которая возвращает функцию

function inArray(arr) {

    return function(x) {
        return arr.includes(x);
    };
}