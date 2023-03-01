let styles = ['Джаз', 'Блюз'];

console.log(styles);

styles.push('Рок-н-ролл');

console.log(styles);

let i;

if (styles.length % 2 == 0) {
    i = styles.length / 2;
} else {
    i = Math.floor(styles.length / 2) + 1;
};

styles[i] = 'Классика';

console.log(styles);

console.log(styles.shift());

console.log(styles);

// unshift.styles('Рэп', 'Регги'); // Ошибка

styles.unshift('Рэп', 'Регги');

console.log(styles);

