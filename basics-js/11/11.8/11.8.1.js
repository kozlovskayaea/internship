async function loadJson(url) { // Функция теперь асинхронная
    let response = await fetch(url); // все .then заменяем на await

    if (response.status == 200) {
        let json = await response.json(); 
        return json;
    }

    throw new Error(response.status);

}

loadJson('no-such-user.json')
    .catch(alert);