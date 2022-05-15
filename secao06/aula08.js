const cursos = [
    'programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web Django Framework',
    'Programalçao em JavaScript'
];

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

cursos.forEach(apresentar); // Aqui está ocorrendo o callback

// usando lamdda
cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
});

// usando arrow
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

const precos = [22.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = [];

for(let p in precos){
    if(precos[p] < 50){
        menores.push(precos[p]);
    }
}

console.log(menores);

// Forma 1
menores = precos.filter(function(preco) {
    return preco < 50;
});

console.log(menores);

// Forma 2

menores = precos.filter(preco => preco < 50);

console.log(menores);
