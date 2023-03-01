let isEmpty = (obj) => {

    for (key in obj) {
        return (key === undefined) ? true : false;
    }

}

// Ошибка, не возвращал true, потому что нет условия, при котором цикл начнет выполняться (если объект пустой).

let issEmpty = (obj) => {

    for (key in obj) {
       return false;
    }

    return true;

}