// Каким будет результат выполнения этого кода?

let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
 
// выведет John в alert *(если добавить ";")

//! Ошибка, пропущена ';' после user. Теперь мы тоже можем увидеть, что такое объединённое выражение синтаксически является вызовом объекта { go: ... } как функции с аргументом (user.go). И это происходит в той же строчке с объявлением переменной let user, т.е. объект user ещё даже не определён, поэтому получается ошибка.