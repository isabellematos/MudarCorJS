'use strict';

function mudarCor (){
    let cor = document.getElementById('cor').value;

    switch (cor.toLowerCase()){
        case 'azul':
            document.documentElement.style.setProperty('--bg-color', '#0000ff');
            break;
        case 'vermelho':
             document.documentElement.style.setProperty('--bg-color', '#FF0000');
            break;
        case 'verde':
            document.documentElement.style.setProperty('--bg-color', '#00FF00');
            break;
        case 'amarelo':
            document.documentElement.style.setProperty('--bg-color', '#ffff00');
            break;
        default:
            break;
    }
   
}

document.getElementById('aplicar').addEventListener('click',  mudarCor);
