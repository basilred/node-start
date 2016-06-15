# Хештегостроитель

Модуль преобразует текстовую строку в хештег.

Например, вызов `hashtagable('make love not war')` вернёт строку `#MakeLoveNotWar`.

## Установка
```bash
npm install hashtagable
```

## Использование
```js
const makeHashTag = require('hashtagable');
const str = 'feel the power of Node.js';

console.log( makeHashTag(str) ); // #FeelThePowerOfNodejs
```
