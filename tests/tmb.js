
// Exporta a função para teste
module.exports = { calcularTMB };


//Cálculo de Taxa Metabólica Basal TMB

function calcularTMB (idadeTmb, pesoTmb, alturaTmb, sexoTmb, atividadeTmb) {
    if (isNaN(idadeTmb) || isNaN(pesoTmb) || isNaN(alturaTmb )) {
        return 'Digite um valor numérico.';
    } else if (idadeTmb <= 0 || pesoTmb <= 0 || alturaTmb <= 0) {
        return 'Numeros negativos e zeros não são aceitos. Verifique se os dados estão corretos.';
    } else if (idadeTmb > 120) {
        return 'O valor da idade máxima permitida é de 120 anos. Verifique se a idade está correta.';
    } else if (pesoTmb > 430) {
        return 'O valor máximo permitido para o peso é: 430kg. Verifique se os dados estão corretos.';
    } else if (alturaTmb > 255) { 
        return 'A valor para a altura máxima permitida é: 2.55m. Verifique se a altura está correta.';
    } 

    // Caso contrário, executa o cálculo
    let tmb = 0;
    if (sexoTmb === 'masculino') {
        tmb = 10 * pesoTmb + 6.25 * alturaTmb - 5 * idadeTmb + 5;
    } else if(sexoTmb === 'feminino') {
        tmb = 10 * pesoTmb + 6.25 * alturaTmb - 5 * idadeTmb - 161;
    }
    let fatorAtividade = 1.2;
    if (atividadeTmb === 'levemente_ativo') {
        fatorAtividade = 1.375;
    } else if (atividadeTmb === 'moderadamente_ativo') {
        fatorAtividade = 1.55;
    } else if (atividadeTmb === 'muito_ativo') {
        fatorAtividade = 1.725;
    }
    tmb *= fatorAtividade;
    // tmb = tmb.toFixed(2);  // converte para String e arredonda para duas casas decimais
    return {tmb, atividadeTmb};
}