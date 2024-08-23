//Função criada apenas para validar a comunicação entre os testes
const sum = (a, b) => {
    return a + b
}

// Exporta a função para teste
module.exports = { sum, calcularIMC };

//Cálculo de IMC
function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        return 'Campos inválidos';
    } else if (altura > 2.55) { 
        return 'Altura inválida';
    } else if (peso > 430) {
        return 'Peso inválido';
    }

    // Caso contrário, executa o cálculo
    const imc = (peso / (altura * altura)).toFixed(2);
    let diagnostico = '';

    if (imc <= 16) {
        diagnostico = 'Magreza Severa';
    } else if (imc > 16 && imc <= 16.99) {
        diagnostico = 'Magreza Moderada';
    } else if (imc >= 17 && imc <= 18.49) {
        diagnostico = 'Magreza Leve';
    } else if (imc >= 18.5 && imc <= 24.99) {
        diagnostico = 'Normal';
    } else if (imc >= 25 && imc <= 29.99) {
        diagnostico = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.99) {
        diagnostico = 'Obesidade Classe I';
    } else if (imc >= 35 && imc <= 39.99) {
        diagnostico = 'Obesidade Classe II';
    } else if (imc >= 40) {
        diagnostico = 'Obesidade Classe III';
    }
    return { imc, diagnostico };
}


