"use script"


// const a = prompt("Son kiriting")

//  while (isNaN(a)) {
//     a = +prompt("Siz son kiritmadingiz")
//  }

//  if (!isNaN(a)) {
    
//  }


//  const b = prompt("Soning darajasini kiriting")

//  while (isNaN(b)) {
//    b = +prompt("Siz son kiritmadingiz")
//  }
//  if (!isNaN(b)) {
//     alert("Siz kiritgan sonlarning darajasi "+ a**b  )
//  }

//  console.log(a**b);




// let num = +prompt("0 dan tashqari son kiriting")
// while (num == 0 || isNaN(num)) {
//    num = +prompt("Bu son emas son kiriting")
// }
// let connect = +prompt("Darajani kiriting")
// while (connect == 0 || isNaN(connect)) {
//    connect = +prompt("Bu son emas son kiriting")
// }
// for (let  i = 1; i < connect; i++ ) {
//    num = num * connect
// }
// alert(num)
// console.log(num);


let name = prompt("Ismingizni kiriting")
let age = +prompt("Yoshingizni kiriting")
console.log("Sizning ismingiz: " + name );
console.log("Sizning yoshingiz: " + age );


let num1 = +prompt("4*5=?")
while (isNaN(num1)){
   num1 = +prompt("4*5=?")
}
if (num1 == 20){
   console.log("Sizning javobingiz to'g'ri " + num1);
}
else if (num1 !== 20){
   console.log("Sizning javobingiz nato'g'ri " + num1, "To'g'ri javob " + 20)
}

let num2 = +prompt("3+4=?")
while (isNaN(num2)){
   num2 = +prompt("3+4=?")
}
if (num2 == 7) {
   console.log("Sizning javobingiz to'g'ri " + num2 );
}
else if (num2 !== 7 ) {
   console.log("Sizning javobingiz nato'g'ri " + num2 + ": ", "To'g'ri javob " + 7);
}


let num3 = +prompt("10/5=?")
while (num3 == 0 || isNaN(num3)){
   num3 = +prompt("10/5=?")
}
if (num3 == 2) {
   console.log("Sizning javob to'g'ri " + num3);
}
else if (num3 !== 2) {
   console.log("Sizning javobimgiz noto'g'ri " + num3 + " :", "To'g'ri javob " + 2);
}

let num4 = +prompt("10-2=?")
while (num4 == 0 || isNaN(num4)){
   num4 = +prompt("10-2=?")
}
if (num4 == 8) {
   console.log("Sizning javob to'g'ri " + num4);
}
else if (num4 !== 8) {
   console.log("Sizning javobimgiz noto'g'ri " + num4 + " :", "To'g'ri javob " + 8);
}

let num5 = +prompt("15 % 3=?")
while (isNaN(num5)){
   num5 = +prompt("15 % 3=?")
}
if (num5 == 0) {
   console.log("Sizning javob to'g'ri " + num5);
}
else if (num5 !== 0) {
   console.log("Sizning javobimgiz noto'g'ri " + num5 + " :", "To'g'ri javob " + 2);
}
