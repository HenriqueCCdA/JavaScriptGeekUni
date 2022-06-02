const novaPromise = () => new Promise((resolver, reject) => {
    let valor = Math.floor(Math.random() * 10); // 0 - 9
    setInterval(() => {
        if(valor % 2 == 0){
            resolver(`O valor ${valor} é par...`);
        }else{
            reject(`O valor ${valor} é impar...`);
        }
    }, 2000);
});

async function executarPromise(){
    try{
        const response = await novaPromise();
        console.log(response);
    }catch(erro){
        console.log(erro);
    }
    console.log('Esperei o await');
}

executarPromise();
console.log('Depois da função');
