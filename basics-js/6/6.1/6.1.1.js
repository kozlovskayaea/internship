let sumTo1 = function(num) {


    let result = 0;

    for (let i = 1; i <= num; i++) {
        result += i;
    }

    return result;

}

let sumTo2 = function(num) {

    if (num == 1) {
        return num;
    } else {
        return ( num + sumTo2(num - 1) );
    }

}

let sumTo3 = function(num) {

    return num * (num + 1) / 2;
    
}