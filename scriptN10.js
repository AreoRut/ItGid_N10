/*let a = 'Ivan';
let b = '37';
let c = 'Engeneer';

let z = ['Ivan', 37, 'Engeneer'];
let x = [];

console.log(z[0]);
console.log(z[2]);
console.log(z[4]);
console.log(z);
*/

//#1-5
let Array0 = ['Yan', true, 32, 'Medical'];
console.log(Array0);

let out = document.querySelector('.out');
let Array1 = [' Ladiy', 22, false, ' HR '];
console.log(Array1);

out.innerHTML = Array1;

let out1 = document.querySelector('.out1');
const Array2 = [2, 'hello', 17, 34, 'privet'];
console.log(Array2.length);
out1.innerHTML = Array2.length;
console.log(Array2.length);
out1.innerHTML = Array2[1];
console.log(Array2[0]);
console.log(Array2[2]);
console.log(Array2[3]);
console.log(Array2[4]);
console.log(Array2[6]);

//#6

let Person = ['Areo', 'Siegfried', 'Male', 47, 'Engineer', 'Miass'];
let out2 = document.querySelector('.out2');
console.log(Person.length);
console.log(Person);
out2.innerHTML = Person;
//#7

let Array3 = ['one', 1, 2, 'two'];
let out3 = document.querySelector('.out3');
console.log(Array3);
Array3 = ['one', 1, 2, 'two', 'hi', 'foo', 'bar'];
console.log(Array3);
out3.innerHTML = Array3;
//#8
let Array4 = ['one', 1, 2, 'two'];
let out4 = document.querySelector('.out4');
console.log(Array4);
Array4 = ['one', 1, 2, 3.14, 17.6, 5, ,];
out4.innerHTML = Array4;
console.log(Array4.length);
console.log(Array4);

//#10

let Array5 = ['one', , , 'two', 'true', 33, , 'Lwe'];
let out5 = document.querySelector('.out5');
console.log(Array5);
console.log(Array5.length);
out5.innerHTML = Array5;

//#13

let Array6 = ['one', , , 'two', 'true', 33, , 'Law'];
let out6 = document.querySelector('.out6');
out6.innerHTML += '<br>';

for (let i = 0; i < Array6.length; i++) {
    let ar = Array6[i];
    console.log(Array6[i]);
    out6.innerHTML += '<br>';
    out6.innerHTML += ar;
    console.log(Array6.length);
    //out6.innerHTML += '<br>' + Array6 + '<br>';
    //document.getElementsByClassName('out6')[0].innerHTML = Array6[3];
    //out6.innerHTML = Array6 + '<br>' + ' ';
    //out6.innerHTML = '<p>' + Array6 + '</p>';
}
//#16
//не рабочий без пуша.
let Ar7 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

let out7 = document.querySelector('.out7');
let ar = [];
for (let i = 0; i < Ar7.length; i++) {
    if (Ar7[i] % 2 == 0) {

        console.log()
    }
}
////Execution #16 

let arr = [4, 5, 7, 8, 14, 45, 76];

function even(a) {
    let ev = [];
    let odd = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            ev.push(a[i]);
        } else {

            odd.push(a[i]);
        }
    }
    console.log('Hi ' + odd);
    console.log('Hi ' + ev);
    return ev;
    //return odd;


}
//console.log(even());
console.log(even(arr));
//console.log(even(odd));
out7.innerHTML = even(arr);

///#16 fork
const d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn16 = document.querySelector('.btn16');
const div16 = document.querySelector('.div16');

btn16.onclick = () => {
    const [a1, a2] = [[], []];
    for (let i = 0; i < d15.length; i++) {
        const el = d15[i];// важный нюанс
        if (el % 2 === 0) {
            a1.push(el);
        } else {
            a2.push(el);
        }
    }
    div16.innerHTML = `четные: ${a1} `;
    div16.innerHTML += ` НЕчетные: ${a2}`;
    console.log(a1);
};
//лирическое отступление
/*
var str = [6,7,3,2,8];
console.log(str[0]); //выведем букву 'a'
console.log(str[1]); //выведем букву 'b'
console.log(str[4]); //выведем букву 'e'
*/
//#17

const btn17 = document.querySelector('.btn17');
let e17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
btn17.onclick = () => {
    let zeros = 0;
    for (let i = 0; i < e17.length; i++) {
        const elem = e17[i];
        zeros += elem === 0 ? 1 : 0;
        console.log(zeros);
    }
    console.log(zeros);
};
//#18
const btn18 = document.querySelector('.btn18');
btn18.onclick = () => {
    let max = e17[0];
    for (let i = 0; i < e17.length; i++) {
        const elem = e17[i];
        max = elem > max ? elem : max;
        console.log(max);
    }
    console.log(max);
};