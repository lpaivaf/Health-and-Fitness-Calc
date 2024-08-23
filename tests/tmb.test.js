
// TESTE TMB

const { calcularTMB } = require('./tmb');
describe('Teste do cálculo da TMB (Taxa Metabólica Basal)', () => {
    it('Calcula o TMB corretamente para um sexo masculino', () => {
        const resultado = calcularTMB(41, 70, 171, 'masculino', 'moderadamente_ativo');
        expect(resultado.tmb).toBeCloseTo(2431.56, 2); // Verifica a TMB calculado com precisão de 2 casas decimais
        expect(resultado.atividadeTmb).toBe('moderadamente_ativo'); // Verifica o nível de atividade física
    });

    it('Calcula o TMB corretamente para um sexo feminino', () => {
        const resultado = calcularTMB(25, 65, 169, 'feminino', 'muito_ativo');
        expect(resultado.tmb).toBeCloseTo(2449.93, 2);
        expect(resultado.atividadeTmb).toBe('muito_ativo');
    });


    //TESTES COM VALORES INVÁLIDOS

    // Testa idade inválida
    it('Retorna mensagem de erro para idade inválida', () => {
        const resultado = calcularTMB(-24, 78, 175, 'masculino', 'moderadamente_ativo'); // idade = -24,  peso = 78kg, altura = 1.75m
        expect(resultado).toBe('Numeros negativos e zeros não são aceitos. Verifique se os dados estão corretos.'); // mostra a mensagem referente ao erro
    });

    //Teste NaN
    it('Retorna mensagem de erro quando o campo estiver vazio, for preechido com caracter especial ou letra.', () => {
        const resultado = calcularTMB(NaN, 78, 175, 'masculino', 'moderadamente_ativo'); // idade = 'NaN - vazia ou caracter especial', peso = 78kg, altura = 1.75m, sexo, nível de atividade. 
        expect(resultado).toBe('Digite um valor numérico.'); // mostra a mensagem referente ao erro
    });

    // Testa altura inválida
    it('Retorna mensagem de erro para altura inválida', () => {
        const resultado = calcularTMB(25, 78, 256, 'masculino', 'moderadamente_ativo');
        expect(resultado).toBe('A valor para a altura máxima permitida é: 2.55m. Verifique se a altura está correta.');
    });

    // Testa paso inválido
    it('Retorna mensagem de erro para peso inválido', () => {
        const resultado = calcularTMB(25, 431, 170, 'masculino', 'moderadamente_ativo');
        expect(resultado).toBe('O valor máximo permitido para o peso é: 430kg. Verifique se os dados estão corretos.');
    });

})