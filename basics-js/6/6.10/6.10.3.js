function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // что выведет? почему?

  // выведет undefined, потому что мы привязали this к методу sayHi, а не к свойству bound