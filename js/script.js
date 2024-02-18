const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let entrada = document.querySelector('#entrada').value;

    function conversor(){
        return Number(entrada * 1.8) + 32;
    }

    // Validando se a entrada contém apenas numeros
    if(Number.isNaN(Number.parseFloat(entrada))){
        alert('Digite apenas números')
    }else{
        document.querySelector('#saida').textContent = 'Temperatura em Fahreinheit: ' + conversor().toFixed(1);
    }
    
})