//Cálculo de IMC

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso_IMC').value);
    // const altura = parseInt(document.getElementById('altura_IMC').value) / 100;
    // Pegando o valor da altura como string para validação sem o parseInt antes do document.getElementById.
    const alturaStr = document.getElementById('altura_IMC').value;

    // Verifica se há pontos ou vírgulas na entrada
    if (/[,\.]/.test(alturaStr)) {
        alert('Altura deve conter apenas números inteiros ou decimais sem ponto e sem vírgula.');
        return;
    }
    // Converte a altura para número após a verificação
    const altura = parseInt(alturaStr) / 100;

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        alert('Campos em branco, letras, número zero e números negativos ou caracteres especiais não são permitidos.');
        return; //Se esta condição for verdadeira, para aqui. 
    } else if (altura > 2.55) {
        alert('Altura deve ser menor ou igual à 2,55m. Verifique se a altura está correta.');
        return;
    }
    else if (peso > 430) {
        alert('Peso deve ser menor ou igual à 430kg. Verifique se os dados estão corretos.');
        return;
    }

    // Caso contrário, executa o código
    const imc = (peso / (altura * altura)).toFixed(2);
    document.getElementById('imc_result').value = imc;
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
    document.getElementById('diagnostico').value = diagnostico;
}

// Limpar campos IMC
function limparCamposIMC() {
    document.getElementById('peso_IMC').value = '';
    document.getElementById('altura_IMC').value = '';
    document.getElementById('imc_result').value = '';
    document.getElementById('diagnostico').value = '';
}


//Cálculo de Taxa Metabólica Basal

function calcularTMB() {
    // const idadeTmb = parseInt(document.getElementById('idade_tmb').value);
    const idadeStr = document.getElementById('idade_tmb').value;
    const sexoTmb = document.getElementById('sexo_tmb').value;
    const pesoTmb = parseFloat(document.getElementById('peso_tmb').value);
    // const alturaTmb = parseFloat(document.getElementById('altura_tmb').value);
    const alturaStr = (document.getElementById('altura_tmb').value);
    const atividadeTmb = document.getElementById('atividade').value;

    if (/[,\.]/.test(idadeStr)) {
        alert('Idade deve conter apenas números inteiros ou decimais sem ponto e sem vírgula.');
        return;
    }
    const idadeTmb = parseInt(idadeStr);

    if (/[,\.]/.test(alturaStr)){
        alert('Altura deve conter apenas números inteiros ou decimais sem ponto e sem vírgula.');
        return;
    }
    const alturaTmb = parseFloat(alturaStr);

    //Fazer cinco verificaçãoes
    if (idadeTmb > 120) {
        alert('Idade deve ser menor ou igual à 120 anos. Verifique se a idade está correta.');
        return;
    } else if (alturaTmb > 255) {
        alert('Altura deve ser menor ou igual à 2,55m. Verifique se a altura está correta.');
        return;
    }
    else if (pesoTmb > 430) {
        alert('Peso deve ser menor ou igual à 430kg. Verifique se os dados estão corretos.');
        return;
    } else if (idadeTmb <= 0 || pesoTmb <= 0 || alturaTmb <= 0) {
        alert('Numeros negativos e zeros não são aceitos. Verifique se os dados estão corretos.');
        return;
    } else if (isNaN(idadeTmb) || isNaN(pesoTmb) || isNaN(alturaTmb)) {
        alert('Digite um valor numérico.');
        return;
    }

    //Cáucular TMB
    let tmb = 0;
    if (sexoTmb === 'masculino') {
        tmb = 10 * pesoTmb + 6.25 * alturaTmb - 5 * idadeTmb + 5;
    } else {
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
    document.getElementById('tmb_result').value = tmb.toFixed(2);
}

//Limpar campos TMB.
function limparCamposTMB() {
    document.getElementById('idade_tmb').value = '';
    document.getElementById('sexo_tmb').value = '';
    document.getElementById('peso_tmb').value = '';
    document.getElementById('altura_tmb').value = '';
    document.getElementById('tmb_result').value = '';
    document.getElementById('atividade').value = '';
}


//Cálculo de Body Fat

document.getElementById('sexo_bf').addEventListener('change', function () {
    const sexo = this.value;
    const quadrilLabel = document.getElementById('quadril_bf_label');
    const quadrilInput = document.getElementById('quadril_bf');

    if (sexo === 'feminino') {
        quadrilLabel.style.display = 'block';
        quadrilInput.style.display = 'block';
    } else {
        quadrilLabel.style.display = 'none';
        quadrilInput.style.display = 'none';
    }
});

function calcularBF() {
    // const idade = parseInt(document.getElementById('idade_bf').value);
    const idadeStr = document.getElementById('idade_bf').value;
    const sexo = document.getElementById('sexo_bf').value;
    const peso = parseFloat(document.getElementById('peso_bf').value);
    // const altura = parseFloat(document.getElementById('altura_bf').value);
    const alturaStr = document.getElementById('altura_bf').value;
    const pescoco = parseFloat(document.getElementById('pescoço_bf').value);
    const cintura = parseFloat(document.getElementById('cintura_bf').value);
    let quadril = 0;

    if(/[,\.]/.test(idadeStr)){
        alert('Idade deve conter apenas números inteiros ou decimais sem ponto e sem vírgula.');
        return;
    }
    const idade = parseInt(idadeStr);

    if(/[,\.]/.test(alturaStr)){
        alert('Altura deve conter apenas números inteiros ou decimais sem ponto e sem vírgula.');
        return;
    }
    const altura = parseInt(alturaStr);
    

    //verificaçãoes
    if (idade <= 0 || peso <= 0 || altura <= 0 || pescoco <= 0 || cintura <= 0 || isNaN(idade) || isNaN(peso) || isNaN(altura) || isNaN(pescoco) || isNaN(cintura)) {
        alert('Campos em branco, letras, número zero e números negativos ou caracteres especiais não são permitidos.');
        return;
    } else if (idade > 120) {
        alert('Idade deve ser menor ou igual á 120 anos. Verifique se a idade está correta.');
        return;
    } else if (altura > 255) {
        alert('Altura deve ser menor ou igual à 2,55m. Verifique se a altura está correta.');
        return;
    }
    else if (peso > 430) {
        alert('Peso deve ser menor ou igual à 430kg. Verifique se os dados estão corretos.');
        return;
    }
    else if (pescoco > 55) {
        alert('Circunferência do pescoço deve ser menor ou igual à 55cm. Verifique se os dados estão corretos.');
        return;
    }
    else if (cintura > 250) {
        alert('Circunferência de cintura deve ser menor ou igual à 2,50m. Verifique se os dados estão corretos.');
        return;
    }


    if (sexo === 'feminino') {
        quadril = parseFloat(document.getElementById('quadril_bf').value);

        if (quadril > 250) {
            alert('Circunferência de quadril deve ser menor ou igual à 2,50m. Verifique se os dados estão corretos.');
            return;
        } else if (isNaN(quadril) || quadril < 0) {
            alert('Campos em branco, letras, número zero e números negativos ou caracteres especiais não são permitidos.');
            return;
        }
    }

    let bf = 0;

    if (sexo === 'masculino') {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(cintura - pescoco) + 0.15456 * Math.log10(altura)) - 450;
    } else if (sexo === 'feminino') {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(cintura + quadril - pescoco) + 0.22100 * Math.log10(altura)) - 450;
    }

    document.getElementById('resultado_bf').textContent = `Gordura Corporal: ${bf.toFixed(2)}%`;
}

//Limpar campos BF.
function limparCamposBF() {
    document.getElementById('idade_bf').value = '';
    document.getElementById('sexo_bf').value = '';
    document.getElementById('peso_bf').value = '';
    document.getElementById('altura_bf').value = '';
    document.getElementById('pescoço_bf').value = '';
    document.getElementById('cintura_bf').value = '';
    document.getElementById('quadril_bf').value = '';
    document.getElementById('resultado_bf').textContent = '';
    document.getElementById('quadril_bf').value = 'none';
    document.getElementById('quadril_bf_label').style.display = 'none';
    document.getElementById('quadril_bf').style.display = 'none';
}



//Calculo de RM
function calcularRM() {
    const cargaLevantada = parseFloat(document.getElementById('peso_rm').value);
    const repeticoes = parseInt(document.getElementById('repeticao_rm').value);
    if (isNaN(cargaLevantada) || isNaN(repeticoes)) { //isNaN veriifca se o valor é realmente um número
        alert('Campos em branco, letras, números negativos ou caracteres especiais não são permitidos.');
        return;
    } else if (cargaLevantada <= 0) {
        alert('O valor da carga deve ser maior que zero.');
        return;
    } else if (cargaLevantada > 1500) {
        alert('Carga Levantada deve ser menor ou igual à 1500kg.');
        return;
    } else if (repeticoes <= 0) {
        alert('O valor da repetição deve ser maior que zero e conter um número inteiro.');
        return;
    } else if (repeticoes > 500) {
        alert('Repetições deve ser menor ou igual à 500.');
        return;
    }

    //limitar reps e carga

    else {

        // Fórmula para calcular o RM (Fórmula de Brzycki)
        const rm = cargaLevantada * (36 / (37 - repeticoes));

        // Exibindo o RM no campo destinado
        document.getElementById('rm_result').value = rm.toFixed(2) + ' kg';

        // Exibindo a tabela de resultados
        const tabela = document.getElementById('table_rm');
        tabela.style.display = 'block';

        // Limpando as linhas existentes na tabela antes de preenchê-la novamente
        const tbody = document.getElementById('tabela_result');
        tbody.innerHTML = '';

        // Gerando as linhas da tabela
        for (let i = 100; i >= 50; i -= 2.5) {
            const pesoPercentual = (rm * i / 100).toFixed(2);
            const repsEstimadas = Math.round(37 - (36 / (rm / pesoPercentual)));

            const row = tbody.insertRow();
            row.innerHTML = `<td>${i}%</td><td>${pesoPercentual} kg</td><td>${repsEstimadas} reps</td>`;
        }
    }
}

// Limpar campos RM
function limparCamposRM() {
    document.getElementById('peso_rm').value = '';
    document.getElementById('repeticao_rm').value = '';
    document.getElementById('rm_result').value = '';

    // Limpando a tabela
    const tbody = document.getElementById('tabela_result');
    tbody.innerHTML = '';

    // Escondendo a tabela após limpeza
    document.getElementById('table_rm').style.display = 'none';
}




//Troca de conteúdo na página

document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('.input');
    const dados = document.querySelector('.dados h2');
    const capa = document.querySelector('.capa');
    const imgCapa = document.querySelector('.img_capa ')
    const sections = document.querySelectorAll('.article-container article');
    const texts = document.querySelectorAll('.article-container .texto');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            const selectedId = this.id;

            dados.style.display = (selectedId === 'home') ? 'none' : 'block';
            capa.style.display = (selectedId === 'home') ? 'block' : 'none';
            imgCapa.style.display = (selectedId === 'home') ? 'block' : 'none';

            sections.forEach(section => {
                if (section.classList.contains(`article_${selectedId}`)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            texts.forEach(text => {
                if (text.classList.contains(`txt_${selectedId}`)) {
                    text.style.display = 'block';
                } else {
                    text.style.display = 'none';
                }
            });
        });
    });

    // Acionar o evento de mudança para o input de rádio que está inicialmente marcado
    document.querySelector('.input:checked').dispatchEvent(new Event('change'));
});



