
module.exports = { calcularRM };

// Calculo de RM
function calcularRM(cargaLevantada, repeticoes) {
    if (isNaN(cargaLevantada) || isNaN(repeticoes)) { 
        return 'Campos em branco, letras, números negativos ou caracteres especiais não são permitidos.';
    } else if (cargaLevantada <= 0) {
        return 'O valor da carga deve ser maior que zero.';
    } else if(cargaLevantada > 1500){
        return('O valor da carga deve ser menor ou igual a 1500kg.');
    } else if (repeticoes <= 0) {
        return 'O valor da repetição deve ser maior que zero e conter um número inteiro.';
    } else if(repeticoes > 500){
        return('O número de repetições deve ser igual ou menor que 500.');
    }

    // Fórmula para calcular o RM (Fórmula de Brzycki)
    const rm = cargaLevantada * (36 / (37 - repeticoes));
    
    // Retorna o valor do RM para uso no teste
    return { rm };
}
