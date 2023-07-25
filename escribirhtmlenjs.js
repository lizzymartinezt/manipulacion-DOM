const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

//cambbiar html desde js
h1.innerHTML = 'TEXT <br>';
h1.innerText = 'TEXT <br>';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('rojo');
 
//Agregar una imagen desde js a html
const img = document.createElement('img');
img.setAttribute('src', 'https://tse2.mm.bing.net/th?id=OIP.Hap0RtQ1mOvdu6y-wtpIoQHaEK&pid=Api&P=0&h=180');
console.log(img);
pid.append(img);