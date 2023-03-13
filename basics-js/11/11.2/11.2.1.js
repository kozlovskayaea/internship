// Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// Выведет "1", затем через 1 секунду "2"

// Ошибка, второй вызов resolve будет проигнорирован, потому что учитывается только первый ("ответ") вызов reject/resolve, а последующие игнорируются.