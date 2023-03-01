let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?

// выведет ['a', 'b', 'function()']

// Только без квадратных скобок и с '{...}' после функции