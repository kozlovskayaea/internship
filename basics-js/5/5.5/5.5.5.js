let arr = ["HTML", "JavaScript", "CSS"];


function sopySorted(arr) {
    return arr
    .concat()
    .sort();
};


let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

// В решении вместо .concat() (копирует все item массива и добавляет к нему items если он был указан) был .slice() (создает новый массив, копируя в него элементы с инекса start до end).