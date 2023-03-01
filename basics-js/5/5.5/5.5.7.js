let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = [];

for (let i = 0; i < users.length; i++) {
        
    let x = users[i].name;
    names.push(x);
};



alert( names ); // Вася, Петя, Маша

// Решение.

let names1 = users.map(item => item.name); // .map создает новый массив, перебирая массив users, в котором каждым item (элемент массива) становится name массива users.