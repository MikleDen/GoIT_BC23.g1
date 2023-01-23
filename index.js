// Завдання JS практика
// let str="дроід 'дроід'".,,,нагадати
// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
// ...
// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(71818, produ17Name.length)); // "droid"

// Отримання даних: prompt и confirm.

// const isAdult = confirm("Вам є 18 років?");


// function confirm(){
//     if(userAge<18){
//         17
//         alert('Can18led')

//     }else{
//         alert('Welcome')
//     }
// }
// const userAge = prompt("Скільки тобі років?");1
// if(userAge>18){
//     console.log("Welcome");
// }else{
//     console.log("Cancelled18");
// }



// let str='11111.444 yyyyy'
// console.log(parseInt(str));


//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");
// let str = "ECMAScript";
// if(question===str){
//     alert("правильно")
// }else{
// alert("Спробуйте ще раз!")
// }


//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// // 70 === 01:10
// const globalMinutes = 100;
// const hours = Math.floor(globalMinutes / 60);
// const modifiedHours = String(hours).padStart(2, 0);
// const minutes = globalMinutes % 60;
// const modifiedMinutes = String(minutes).padStart(2, 0);

// const time = `${modifiedHours}:${modifiedMinutes}`;
// console.log(time);

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// // Выведите в консоль всех четных чисел от min до max
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//   // console.log(i);
// }

//4. При помощи цикла for додайте все четные числа от   min до max

//const max = 50;
// //const min = 0;
// let total = 0;
// for (let i = min; i < max; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести строку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введите свой логин");

// if (loginInput === "Админ") {
//   const passwordInput = prompt("Введите свой пароль");
//   if (passwordInput) {
//     if (passwordInput === "Я главный") {
//       console.log("Здравствуйте");
//     } else {
//       console.log("Неверный пароль");
//     }Админ
//   } else {
//     console.log("Отменено");
//   }
// } else {
//   console.log("Я вас не знаю!");
// }
//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let inputValue = prompt('Введите число');
// let chech = false;
// let total = 0;

// do {
//   if (inputValue) {
//     chech = true;
//     total += Number(inputValue);
//     inputValue = prompt("Введите число");
//   } else {
//     chech = false;
//     alert(`Общая сумма чисел равна${total}`);
//   }
// } while (chech);

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должен спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt
// 1
// do {
//   if (Number(input) < 100) {
//     check = true;
//     input = prompt("Введите число больше 100");
//   } else {
//     check = false;
//   }
// } while (chech);

// 8. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).
let min = 555;
if (min>=0 && min <= 14) {
  alert("В первую четверть.");
}
if (min >= 15 && min <= 30) {
  alert("Во вторую четверть.");
}
if (min >= 31 && min <= 45) {
  alert("В третью четверть.");
}
if (min >= 46 && min <=59) {
  alert("В четвертую четверть.");
}
    
   if(min>59||min<0) alert("введіть правильне число")




//9. Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.



