let str1

checkSpam = function(str) {

    str = prompt('');

    str = str.toLowerCase();

    return ('xxx'.includes(str) || 'viagra'.includes(str)) ? true : false

}

checkSpam();

// Перепутала местами строку и то, что в ней должно быть

let str

checkSpam = function(str) {

    str = prompt('');

    str = str.toLowerCase();

    return (str.includes('xxx') || str.includes('viagra')) ? true : false

}

checkSpam();