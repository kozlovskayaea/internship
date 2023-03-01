// Создать класс данных “Товар”
// С полями
// Название
// Цена
// Количество
// Описание
// Наполнить массив объектами такого класса.
// Написать метод, который получает строку вида
// “name-contains-fd&price-=2&quantity->5&description-ends-abc”
// “name-starts-fd&quantity-=5”
// На выходе возвращает массив, только с подходящими объектами
// возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых

//строковые поля: name, description
//числовые поля: price, quantity

//маска для строковых: <name>-<operator>-<value>
//маска для числовых: <name>-<operator>-<value>

//operator для строковых: contains, starts, ends
//operator для числовых: <, =, >, <=, >=

// [name,description]-[contains, starts, ends]-[value]|[price, quantity]-[<, =, >, <=, >=]-[value]

// [name]-[contains, starts, ends]-[value]
// [description]-[contains, starts, ends]-[value]
// [price]-[<, =, >, <=, >=]-[value]
// [quantity]-[<, =, >, <=, >=]-[value]

let str = 'name-contains-o&price-=2&quantity->1&description-ends-wo';
class product {

    name = '';
    price = 0;
    quantity = 0;
    description = 'description';

}

let product1 = new product();
product1.name = 'one';
product1.price = 1;
product1.quantity = 1;
product1.description = 'descriptionOne';

let product2 = new product();
product2.name = 'two';
product2.price = 2;
product2.quantity = 2;
product2.description = 'descriptionTwo';

let product3 = new product();
product3.name = 'three';
product3.price = 3;
product3.quantity = 3;
product3.description = 'descriptionThree';

let product4 = new product();
product4.name = 'four';
product4.price = 4;
product4.quantity = 4;
product4.description = 'descriptionFour';

let product5 = new product();
product5.name = 'five';
product5.price = 5;
product5.quantity = 5;
product5.description = 'descriptionFive';

let productArr = [];
productArr.push(product1, product2, product3, product4, product5);
// console.log(productArr);


function firstSplit(str) {
    let arr = str.split('&');
    return arr;
}

let firstResult = firstSplit(str);
// console.log(firstResult);

function secondSplit(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let j = arr[i].split('-');
        newArr.push(j);
    }
    return newArr;
}

let searchOptions = secondSplit(firstResult);
//console.log(searchOptions);



function nameSearch(productArr, searchOptions) {
    
    if (!str.includes('name')) return null;
    
    let resultName = [];
    
    // Первая проверка по имени, в результате которой проходящие эту проверку продукты попадают в resultArr
    productArr.forEach(productElement => { // В массиве проходим по каждому product
     
        searchOptions.forEach(searchOption => { // Сравниваем с каждым элементом в массиве полученном на основе первоначальной строки
     
                    if (searchOption[0] == 'name') {
                        
                        if (searchOption[1] == 'starts') {
                            
                           if (productElement.name.startsWith(searchOption[2])) resultName.push(productElement);
                           
                        } else if (searchOption[1] == 'contains') {
                            if (productElement.name.includes(searchOption[2])) resultName.push(productElement); 
                        } else if (searchOption[1] == 'ends') 
                        {
                            if (productElement.name.endsWith(searchOption[2])) resultName.push(productElement);
                        };
                    };
            }); 
    });
    
    return resultName;
    
}


function descriptionSearch(productArr, searchOptions) {
    if (!str.includes('description')) return null;

    let resultDescription = [];
    
    // Первая проверка по имени, в результате которой проходящие эту проверку продукты попадают в resultArr
    productArr.forEach(productElement => { // В массиве проходим по каждому product
     
        searchOptions.forEach(searchOption => { // Сравниваем с каждым элементом в массиве полученном на основе первоначальной строки
                
                    if (searchOption[0] == 'description') {
                        
                        if (searchOption[1] == 'starts') {
                            
                           if (productElement.name.startsWith(searchOption[2])) resultDescription.push(productElement);
                           
                        } else if (searchOption[1] == 'contains') {
                            if (productElement.name.includes(searchOption[2])) resultDescription.push(productElement); 
                        } else if (searchOption[1] == 'ends') 
                        {
                            if (productElement.name.endsWith(searchOption[2])) resultDescription.push(productElement);
                        };
                    };
            }); 
    });
    
    return resultDescription;
    
};

function priceSearch(productArr, searchOptions) {

    if (!str.includes('price')) return null;
    
    let resultPrice = [];
    
    productArr.forEach(productElement => { // В массиве проходим по каждому product
     
        searchOptions.forEach(searchOption => { // Сравниваем с каждым элементом в массиве полученном на основе первоначальной строки
                    if (searchOption[0] == 'price') {
                        
                       let temp = searchOption[1].split('');
                       
                       if (temp[0] == '=') {
                           if (temp[1] == productElement.price) resultPrice.push(productElement);
                       }
                       if (temp[0] == '>') {
                            if (temp[1] < productElement.price) resultPrice.push(productElement);
                       }
                       if (temp[0] == '<') {
                            if (temp[1] > productElement.price) resultPrice.push(productElement);
                       }
                       if (temp[0] == '>' && temp[1] == '=') {
                            if (temp[2] <= productElement.price) resultPrice.push(productElement);
                       }
                       if (temp[0] == '<' && temp[1] == '=') {
                            if (temp[2] >= productElement.price) resultPrice.push(productElement);
                       };
                    };
            }); 
    });
    
    return resultPrice;
    
};

function quantitySearch(productArr, searchOptions) {
    
    if (!str.includes('quantity')) return null;
    
    let resultQuantity = [];
    
    productArr.forEach(productElement => { // В массиве проходим по каждому product
     
        searchOptions.forEach(searchOption => { // Сравниваем с каждым элементом в массиве полученном на основе первоначальной строки
                    if (searchOption[0] == 'quantity') {
                        
                       let temp = searchOption[1].split('');
                       
                       if (temp[0] == '=') {
                           if (temp[1] == productElement.price) resultQuantity.push(productElement);
                       }
                       if (temp[0] == '>') {
                            if (temp[1] < productElement.price) resultQuantity.push(productElement);
                       }
                       if (temp[0] == '<') {
                            if (temp[1] > productElement.price) resultQuantity.push(productElement);
                       }
                       if (temp[0] == '>=' && temp[1] == '=') {
                            if (temp[2] <= productElement.price) resultQuantity.push(productElement);
                       }
                       if (temp[0] == '<=' && temp[1] == '=') {
                            if (temp[2] >= productElement.price) resultQuantity.push(productElement);
                       };
                    };
            }); 
    });
    
    return resultQuantity;
    
};  

function search(productArr, searchOptions) {
    
    let nameSearchArr = nameSearch(productArr, searchOptions);
    let descriptionSearchArr = descriptionSearch(productArr, searchOptions);
    let priceSearchArr = priceSearch(productArr, searchOptions);
    let quantitySearchArr = quantitySearch(productArr, searchOptions);
    
    if (nameSearch.length == 0 || descriptionSearch.length == 0 || priceSearch.length == 0 || quantitySearch.length == 0) {
        return 'По вашему запросу ничего не найдено.'
    }
    
    function match(first, second) {
        if (first !== null && second !== null) {
            //console.log('match', second)
            return first.filter(item => second.indexOf(item) > -1 )
        } else if (first == null && second !== null) {
            return second;
        } else if (first !== null && second == null) {
            return first;
        } else {
            return null;
        }
    };
        
    let matched = match(nameSearchArr, match(descriptionSearchArr, match(priceSearchArr, quantitySearchArr)));
    
    return matched;
        
    //console.log(nameSearchArr);
    //console.log(descriptionSearchArr);
    //console.log(priceSearchArr);
    //console.log(quantitySearchArr);

}  

let result = search(productArr, searchOptions);
console.log('RESULT', result);

