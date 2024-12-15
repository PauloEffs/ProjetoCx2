let saldo = 1000.00;
const resultado = document.getElementById('resultado')

function mostrarResultado (mensagem) {
    resultado.textContent = mensagem;
}

function validarValor(valor) {
    if (isNaN(valor) || valor <= 0){
        throw new Error ('Valor Inválido')
    } 
}

function realizarOperacao (){
    const operacao = document.getElementById('operacao').value;
    const valor = Number (document.getElementById('valor').value);


try{
    if (operacao === 'consultar'){
        mostrarResultado(`Saldo atual: R$ ${saldo.toFixed(2)}`)
        return
    }

    validarValor(valor)

    if (operacao === 'sacar') {
        if (valor > saldo){
            throw new Error('Saldo Insuficiente')
        }
        saldo -= valor;
        mostrarResultado(`Saque realizado. Novo saldo: R$ ${saldo.toFixed(2)}`)
    }    
    else {
        saldo += valor;
        mostrarResultado(`Depósito realizado. Novo saldo:R$ ${saldo.toFixed(2)} `)
    }

    document.getElementById('valor').value = '';

} 
catch (erro){
    mostrarResultado(`Erro: ${erro.message}`)
}
}