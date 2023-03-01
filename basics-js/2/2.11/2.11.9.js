let login = promt('Кто там?');

if (login == null) {
    alert('Отменено');
} else if (login == 'Админ') {
    let password = prompt('Пароль?')
    if (password == null) {
        alert('Отменено');
    } else if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else {
        alert('Неверный пароль');
    }
} else {
    alert('Я вас не знаю');
}

// Решение: 

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}