let valor = document.querySelector("#valor");


function divisao(){
    let num = Number(valor.value);
    let a = num % 3;
    let b = num - a;
    let c = b / 3;

    resultado1.innerHTML = c;
    resultado2.innerHTML = c;
    resultado3.innerHTML = c + a;


}

botao.onclick = function(){
    divisao();
}