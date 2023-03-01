let user = {
    name: "Василий Иванович",
    age: 35
  };

  let json = JSON.stringify(user);

  console.log(json);

  let newObj = JSON.parse(json);

  console.log(newObj);

  // Решение.

  let user2 = JSON.parse(JSON.stringify(user)); 