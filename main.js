// Alph seting

let alph = " abcdefghijklmnopqrstuvwxyz ";
const alph_arr = alph.split('');
const alph_reverse = alph.split('').reverse();

let text = prompt('Enter your message');
document.write(text + '<br><br>');


let text_arr = text.split('');


let letter_num = [];
let atbash_text = [];
for (let i = 0; i < text_arr.length; i++)
{

    letter_num[i] = alph_arr.indexOf(text_arr[i]);
    atbash_text[i] = alph_reverse[letter_num[i]];
}
console.log(atbash_text);

let atbash = atbash_text.join("");
document.write(atbash);
