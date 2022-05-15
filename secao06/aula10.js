let xuxa = 'global'; // pode ser acessada globalmente no nosso projeto

function outra(){
    let xuxa = 'local'; // pode ser acessa locamente no bloco/contexto
    imprimir();
    console.log(xuxa); // local
}

function imprimir(){
    console.log(xuxa);
}

outra(); // ??

// Novo exemplo
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel; // ?
    }

    return interna;
}

let executa = externa();

console.log(executa());

/*
    Estamos estudando Closures (contexto léxico de uma função)

    Linguagem de Programação chamada Clojure

*/