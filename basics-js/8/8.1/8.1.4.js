let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  alert( lazy.stomach ); // apple

  // Для этого нужно, чтобы каждый хомяк имел свой собственный stomach, тогдас при вызове eat() он будет "наполнять" тот stomach который передается ему через this (т.е, объект перед точкой, т.е. каждый отдельный хомяк будет иметь свой отдельный stomach)

  // ЛИБО (из решения), можно сделать метод eat() так, чтобы он создавал массив food и присвыивал его this.stomach