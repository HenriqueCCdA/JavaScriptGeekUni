/*
array contendo 5 elementos -> n = 5

// Indices -> posição do elemento no array
[0][1][2][3][4]

//  Valores em um array
[12]['Geek'][true][48][52]

// Detalhes sobre arrays
- Possuem tamanho infinito*
- Podemos colocar qualquer tipo de dado
*/

// Forma 1
var alunos = new Array('Cristina', 'Ricardos', 'Lucas', 'Maria', 'Sofia');
console.log(alunos);

// Forma 2 [Recomendada]
var notas = [1, 3, 5, 7, 9];
console.log(notas);

// Criando um array vazio
var dados = [];
console.log(dados);

// Fazendo acesso ao valor de um indice
console.log(notas[2]);

// Alterando o valor a partir do indice
notas[2] = 12;
console.log(notas);

// Atenção ao acessar um valor com um índice que não existe
notas[9] = 10; // não existe
console.log(notas);

if(notas[5] == undefined){
    notas[5] = 54;
}

console.log(notas[5]); // 54
console.log(notas[6]); // undefined
console.log(notas[7]); // undefined
console.log(notas[8]); // undefined
console.log(notas[9]); // 10

console.log(notas[5] == undefined) // true

// Inserindo elementos no final do array

var nomes = ['Paula', 'Maria', 'Julia'];
console.log(nomes);

nomes.push('Vanessa'); // insero o valor no final do array
console.log(nomes);

// Tamanho do array
console.log(nomes.length);

// Ordenar os dados de a um array
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'Ana', 'Carla'];
console.log(alunos);

alunos.sort(); // Ordenando array de strings
console.log(alunos);

var precos = [123.55, 42.27, 546.99, 23,12];
console.log(precos);

//precos.sort(); // ATENÇÃO Ordenação de floats não funciona assim!
//console.log(precos);

precos.sort(function(a, b){ return a - b;});
console.log(precos);

var idades = [5, 1, 8, 12, 44, 78];
console.log(idades);

//idades.sort(); // ATENÇÃO Ordenação de int não funciona assim!
//console.log(idades);

idades.sort(function(a, b){ return a - b;});
console.log(idades);

// Deletando dados de um array
delete idades[3];
console.log(idades);

idades[3] = 12;
console.log(idades);

//idades.splice(3, 1); // A partir do indice 3, delete 1 elemento
//console.log(idades);

idades.splice(3, 0, 56, 89) // A partir do indice 3, não delete nenhum, mas adicione 56, 89
console.log(idades);

idades.splice(3, 1, 23) // A partir do índice 3, deleta, e adiciona 23
console.log(idades);

// Iterar em um array
for(var i = 0; i < idades.length; i++){
    console.log(idades[i]);
}


// Removendo elementos da última posição do array
idades.pop(); // remove e retorna o último elemento de um array
console.log(idades);

var ret = idades.pop();
console.log(ret);
console.log(idades);

// Removendo o primeiro elemento de um array
idades.shift(); // remove e returna o elemento
console.log(idades);

var ret = idades.shift();
console.log(ret);
console.log(idades);

// Inserindo elementos no ínicio de um array
idades.unshift(99);
console.log(idades);

// retorna uum novo array a partir do índice informado
var novo = idades.slice(3);
console.log(novo);

var novo = idades.slice(1, 3); //a parit do índice 1, pegue até o índice 2  sem incluí-lo
console.log(novo);

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); // concatena os dois arrays
console.log(rest);

rest = impares.concat(pares);
console.log(rest);

rest.sort(function(a, b){ return a - b;});
console.log(rest);

// 4 x 4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9 , 10, 11, 12], [13, 14, 15, 16]]

console.log(tabuleiro[0][0]); // linha 0 coluna 0 -> 1
console.log(tabuleiro[2][2]); // linha 2 coluna 2 -> 11