/*
    - conjutos não aceitam repetição de valores;
    - conjutos não são indexadas.
*/


// Declarando uum conjunto
let cursos = new Set();

// Adicionando valores
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e Lógica de Programação');

// Adicionar valores concatenados
cursos.add('Programação em C').add('Programa em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

console.log(cursos);

// Acessando o tamanho do conjunto
console.log(cursos.size);

console.log(cursos.has('Banco de Dados'));
console.log(cursos.has('Banco de dados'));

// Deletar elementos de um conjunto
let ret = cursos.delete('Programação para Leigos');
console.log(ret);
console.log(cursos);
