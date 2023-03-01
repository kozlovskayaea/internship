function sumInput() {
    let arr = [];

    let value = prompt('Введите число.');
    let result;

    if (value == '' || value == null || value != Number(value)) {
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;

    } else {
        arr.push(value);
        sumInput();
    }

}

// Не работает, скорее всего из за вызова в функции самой себя.

let arr = [];
let result = 0;

function sumInput2() {

    while (true) {

        let value = prompt('Введите число.');
        
        if (value == '' || value == null || value != Number(value)) break;

        arr.push(Number(value));

    }

    for (let num of arr) {
        result += num;
    }
    
    return result;
     
}

sumInput2();
console.log(result);