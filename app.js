//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/**
// 
// ! Funcionalidades:
// TODO: Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma 
lista visível ao clicar em "Adicionar".

// TODO: Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

// TODO: Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

// TODO: Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e 
exibido na página.
//  */

let nomes = [];
let listaAmigos;
let tamanho = 10;

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (!nome || nomes.includes(nome)){
        alert(`Você precisa adicionar um nome válido`);
    } else{
        nomes.push(nome);
        listaAmigos = document.querySelector('#listaAmigos');
        listaAmigos.innerHTML = nomes.map(nome => `${nome}`).join('<br>');
    }
    if(nomes.length > tamanho){
        tamanho*10;
    }
    console.log(nomes.toString());
}

function sortearAmigo(){
    let sorteio = parseInt(Math.random() * tamanho);
    let sorteado = nomes.at(sorteio);
    if(sorteado == 'undefined' || sorteado == null){
        return sortearAmigo();
    }else {
        listaAmigos = document.querySelector('#resultado');
        listaAmigos.innerHTML = sorteado.toString();
    }
}
