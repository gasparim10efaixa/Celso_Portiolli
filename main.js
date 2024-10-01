// function soma(num1,num2){
//     return num1+num2;
// }
// console.log(soma(3,4));

// function area(num1){
//     return num1**2;
// }
// console.log(area(4))

// let areaTrapézio= function(num1,num2,num3) {
//     return [num1+num2]*num3/2;
// }
// console.log(areaTrapézio(3,4,6));
let nomes = ['Lucas','Joao P','Lorena','Neymar Jr','Maria','Arthur','Caio','Felipe B','Luiz','Nicolas','Julia K','Monise','Mel','Marina','Vinícius','Rhianne','João V','Laís','Gabriel','Aaron','Danilo']

let i=0;
while (i<nomes.length) {
    console.log(i);
    console.log(nomes[i]);
    i=i+1;
}
for (let i = 0; i < nomes.length; i++) {
    const element = nomes[i];
    console.log(i)
    console.log(nomes[i])
}

let idade=parseInt(prompt('Qual é a sua idade?'))
if (idade>17) {
    console.log('Pode dirigir')
    document.write('Pode Dirigir!!!')
} else {
    console.log('ilegal dirigir')
    document.write('Nem pense em dirigir!!!')
}
