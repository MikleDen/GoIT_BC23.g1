// const r = prompt('enter radius');
// const h = prompt('enter height');
// const s = Math.PI*(r*r);

// const v = s * h; // порахувати по правильній форумлі площу циліндра


// document.open();
// document.write(`
//   ********************<br>
//   Обьем цилиндра с площадью основы s = Math.PI*(r*r) , радиусом *R* и высотой *H* равен: <br>
//   -------------------- <br>



  
//   v = ${v}<br><br>
//   -------------------- <br>
//   end.
// `);
// document.close();


// let str ='мене звати "Марія"'
// if(str.includes("Марія")){
//     console.log("yes");
// }else{
//     console.log("no");
// }
1.//1. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// // Выведите в консоль всех четных чисел от min до max
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//    console.log(i);
// }

//2. Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера
// введені данні можуть бути будь якого формату(великі і малі літери)

//Якщо відвідувач вводить "адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести рядок "Скасовано"
//  Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Здрастуйте!"
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt("Введите свой логин");

// if (loginInput.toLowerCase()=== "адмін") {
//   const passwordInput = prompt("Введите свой пароль");
//   if (passwordInput) {
//     if (passwordInput === "Я головний") {
//       console.log("Здравствуйте");
//     } else {
//       console.log("Невірний пароль");
//     }
// } else {
//     console.log("Скасовано");
//   }
// } else {
//   console.log("Я вас не знаю!");
// }


// 3. Рядок, що складається з символів, наприклад, "abcde".
// Перевірте, чи перший символ цього рядка - це буква "a".
// Якщо так - логуйте  "так", інакше виведіть "ні".
// let str = "abcde";
// if(str[0]==='a'){
//     console.log("yes");
// }else console.log("no");

// function str (string,firstLetter) {

//     if(string[0]===firstLetter){
//             console.log("yes");
//         }else console.log("no");
        
// }
// str("fsdccwdcver","g")
// 4.Написати програму розрахунку об'єму циліндра, всі дані (крім числа PI) вводяться з клавіатури руками. (Число Пі в js виглядає так: Math.PI). Також потрібно вивести інформацію у такому вигляді:
//**************

// Об'єм циліндра з площею основи *S* (вивіть значення), радіусом *R* та висотою *H* дорівнює:

//--------------------

// V = результат.

// -------------------

// end.

// P.S. Усі зірочки та рисочки потрібно намалювати. Висновок виконувати документ (document.write())
// const r = prompt('enter radius');
// const h = prompt('enter height');
// const s = Math.PI*(r*r);

// const v = s * h; 

// document.open();
// document.write(`
//   ********************<br>
//   Об'єм циліндра з площею основи s , радіусом *R* та висотою *H* дорівнює: <br>
//   -------------------- <br>


//   v = ${v}<br><br>
//   -------------------- <br>
  
// `);
// document.close();

// Задача 4. Порахувати сумму непарних чисел от 0 до 250.
// const val1 = parseInt(0);
// const val2 = parseInt(250);
// let resultSum =0;



// for(let i=val1;i<=val2 ;i++){

//     if (i%2==1) {
//        resultSum += i;
//        console.log(resultSum);
//     } 
// }

// Выведите столбец четных чисел в промежутке от 0 до 100. (document.write)
// for(let i=0;i<=100 ;i++){
//     if (i%2==0) {
               
//                document.write(i+"</br>");
//             } 
// }

// function getRandomHexColor() {
    //     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    //   };