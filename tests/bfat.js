
// Exporta a função para teste
module.exports = { calcularBF };

// Cálculo de Body Fat
function calcularBF(idade, sexo, peso, altura, pescoco, cintura, quadril) {

    // Verificações
    if (idade <= 0 || peso <= 0 || altura <= 0 || pescoco <= 0 || cintura <= 0 || quadril <= 0) {
        return 'Número zero e números negativos não são permitidos.';
    } else if (isNaN(idade) || isNaN(peso) || isNaN(altura) || isNaN(pescoco) || isNaN(cintura) || isNaN(quadril)) {
        return 'Campos em branco, letras ou caracteres especiais não são permitidos.';
    } else if (idade > 120) {
        return 'Idade deve ser menor ou igual à 120 anos. Verifique se a idade está correta.';
    } else if (altura > 255) {
        return 'Altura deve ser menor ou igual à 2,55m. Verifique se a altura está correta.';
    } else if (peso > 430) {
        return 'Peso deve ser menor ou igual à  430kg. Verifique se os dados estão corretos.';
    } else if (pescoco > 55) {
        return 'Circunferência do pescoço deve ser menor ou igual à 55cm. Verifique se os dados estão corretos.';
    } else if (cintura > 250) {
        return 'Circunferência de cintura deve ser menor ou igual à 2,50m. Verifique se os dados estão corretos.';
    } else if (sexo === 'feminino') { // Verifica dados do campo quadril se for feminino
        if (quadril > 250) {
        return 'Circunferência de quadril deve ser menor ou igual à  2,50m. Verifique se os dados estão corretos.';
        }
    }

    let bf = 0;
    if (sexo === 'feminino') {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(cintura + quadril - pescoco) + 0.22100 * Math.log10(altura)) - 450;
    }

    if (sexo === 'masculino') {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(cintura - pescoco) + 0.15456 * Math.log10(altura)) - 450;
    }

    // console.log('Resultado do BF: ' + bf);
    return { bf };
}

// calcularBF(32, 'masculino', 81, 1.70, 38, 110)



