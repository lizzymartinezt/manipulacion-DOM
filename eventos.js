const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn= document.querySelector('#btncalcular');
const pResult= document.querySelector('#result');

function btnOnclick() {
    //console.log(input1.value + input2.value);
    //para sumar 
    //console.log(Number(input1.value) + parseInt(input2.value));
    const sumaImputs = input1.value + input2.value;
    pResult.innerText ="Resultado: " + ' ' +  sumaImputs;
}