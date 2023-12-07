function comprar() {
    let tipoIngresso = document.querySelector('#tipo-ingresso').value;
    let quantidade = document.querySelector('#qtd').value;
    let pista = document.querySelector('#qtd-pista').textContent;
    let superior = document.querySelector('#qtd-superior').textContent;
    let inferior = document.querySelector('#qtd-inferior').textContent;
    
    if (tipoIngresso === 'pista') {
        pista = pista - quantidade;
        document.querySelector('#qtd-pista').textContent = pista;

        if (pista < 0) {
            alert('Acabou o ingresso para a pista');
            document.querySelector('#qtd-pista').textContent = 0;
        }

    } else if (tipoIngresso === 'superior') {
        superior = superior - quantidade;
        document.querySelector('#qtd-superior').textContent = superior;

        if (superior < 0) {
            alert('Acabou o ingresso para a cadeira superior');
            document.querySelector('#qtd-superior').textContent = 0;
        }

    } else {
        inferior = inferior - quantidade;
        document.querySelector('#qtd-inferior').textContent = inferior;

        if (inferior < 0) {
            alert('Acabou o ingresso para a cadeira inferior');
            document.querySelector('#qtd-inferior').textContent = 0;
        }
    }

    document.querySelector('#qtd').value = 0;
}