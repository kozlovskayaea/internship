// Почему побитовые операции в примерах ниже не меняют число? Что они делают внутри?

alert( 123 ^ 0 ); // 123
alert( 0 ^ 123 ); // 123
alert( ~~123 ); // 123

// операция ^ (или) сравнивает числа побитово, и ставит 1, если в первом или втором числе стоит 1. Т.к. в числе 0 в битовом предствалении только нули, то будет возвращено число равное первому (наоборот, соответственно во втором примере)
// оператор побитового не "инвертирует" число, соответственно, используя его второй раз - мы возвращаем первоначальное число