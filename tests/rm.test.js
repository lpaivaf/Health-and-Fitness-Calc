const { calcularRM } = require('./rm');

describe('Cálculo do percentual de RM (Repetição Máxima)', () => {
    it('Deve calcular a repetição máxima corretamente', () => {
        const resultado = calcularRM(100, 1);
        expect(resultado.rm).toBeCloseTo(100, 2);
    });

       //TESTES COM VALORES INVÁLIDOS
    it('Retorna uma mensagem de erro para carga negativa', () => {
        const resultado = calcularRM(-10, 5);
        expect(resultado).toBe('O valor da carga deve ser maior que zero.');
    });

    it('Retorna uma mensagem de erro para carga acima de 1500kg', () => {
        const resultado = calcularRM(1501, 5);
        expect(resultado).toBe('O valor da carga deve ser menor ou igual a 1500kg.');
    })

    it('Retornar uma mensagem de erro para repetição negativa', () => {
        const resultado = calcularRM(100, -3);
        expect(resultado).toBe('O valor da repetição deve ser maior que zero e conter um número inteiro.');
    });

    it('Retorna uma mensagem de erro para números de repetições acima de 500', () => {
        const resultado = calcularRM(100, 501);
        expect(resultado).toBe('O número de repetições deve ser igual ou menor que 500.');
    })

    it('Retornar uma mensagem de erro para valores não numéricos', () => {
        const resultado = calcularRM('abc', 5);
        expect(resultado).toBe('Campos em branco, letras, números negativos ou caracteres especiais não são permitidos.');
    });
});
