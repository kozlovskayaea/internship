let printList = function(list) {
    
    let temp = list; // Создаем временную переменную

    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
    // До тех пор, пока temp "существует" (list !== null), будет выполнятся вывод элемента списка и перезаписываться переменная.
};


let printList2 = function(list) {
    
    console.log(list.value); // Выводим первый элемент

    if (list.next) {
        printList2(list.next);
    };
    // Если "существует" следующий, то вызываем для него эту же функцию (саму себя) и выводим новое значение, затем вызываем функцию на слеудющее значение и т.д.
}