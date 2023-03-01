let str,
    firstChar,
    subStr,
    newStr;


const ucFirst = function(str) {

    str = prompt('Введите слово.');

    if (str == '' || str == null)  {
        return '';
    } 
    
    firstChar = str[0].toUpperCase();
    subStr = str.slice(1);

    return newStr = firstChar + subStr;
    
}

ucFirst(str);

// у меня работает в онлайн-компиляторе, но не проходит тест (перевод в верхний регистр) в учебнике.

// В онлайн компиляторе при проверке на пустую строку (вручную) выводит undefined.