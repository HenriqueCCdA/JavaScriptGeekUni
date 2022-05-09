var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',
]

// console.log(cursos);
// console.log(cursos.length);

// definir uma função
function imprimir(curso, indice){
    console.log(indice + ' - ' + curso);
}

cursos.forEach(imprimir);

// utilização de um função anônima (lambda/callbak) e template string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`);
})
