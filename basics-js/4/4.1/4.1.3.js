// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";

// Да, потому что const защищает саму переменную от изменения, но не свойства внутри неё.