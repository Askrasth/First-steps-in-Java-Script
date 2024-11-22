let x = 2;
let y = 4 ;

let soma = x + y 

console.log(soma)

document.write(soma)

document.getElementById('result').innerHTML=soma;

//alert(soma)

// so as we can se at each of them is will come the result just by writting the variable name's. 

let candidatos = 18

if (candidatos >= 20){
    document.getElementById('text').innerHTML='numero suficiente para haver curso'
}else{
    document.getElementById('text').innerHTML='numero insuficiente para haver curso'
}
// let's try other situations that we can use if else. 


let idade = 18 

if (idade >= 20){
    document.getElementById('text2').innerHTML='pode tirar carteira de motorista'
}else{
    document.getElementById('text2').innerHTML='carteira negada'
}


let recipiente = 75 // porcento

if (recipiente >= 100){
    document.getElementById('text3').innerHTML='recipiente cheio'
} else {
    document.getElementById('text3').innerHTML='recipiente vazio'
}

// let's learn else if

let nota = 10

if (nota > 8){
    document.getElementById('text4').innerHTML='aprovado'
} else if(nota >= 5) {
     document.getElementById('text4').innerHTML='recuperação'
}else{
     document.getElementById('text4').innerHTML='reprovado'
}


// else if is easy. You just need to add one more code line. 

let termino = 1049 // 10:50

if(termino <= 1050){
     document.getElementById('text5').innerHTML='Terminou rapido'
} else if (termino  <1055) {
     document.getElementById('text5').innerHTML='terminou em tempo'
}else if (termino  < 1059){
     document.getElementById('text5').innerHTML='terminou um pouco atrasado'
}
else if (termino < 1105){
    document.getElementById('text5').innerHTML='terminou  atrasado'
}
else{
    document.getElementById('text5').innerHTML='desconsiderado'
}

// coding is easy. here in this else if sintax what we can see is. if i finish before 10:50 i've finished fast. If i finish before 10:55 i finished on time. and that's goes on. the same to the next lines. in this case is a less nad less else if case. Practice more of this type ones. 


/*let band = "slayer"

if (band = 'metallica'){
    document.write('Popular')
} else if ( band = 'megadeth'){
    document.write('angry')
} else if (band = 'slayer'){
    document.write('brutal')
}else if (band = 'anthrax'){
    document.write('happy')
}
*/ 
// solve this tomorrow 