// TESTE BF

const { calcularBF } = require('./bfat');

describe('Teste - Cálculo do BF (Body-Fat)', () => {

    // Testes com resultados esperados
    // Parâmetros: (idade, sexo, peso, altura, pescoco, cintura, quadril)
    it('Calcula o BF masculino', () => {
        const resultado = calcularBF(41, 'masculino', 70, 171, 35, 89);
        expect(resultado.bf).toBeCloseTo(22.76, 2);
    }); //Teste não esta funcionando

    it('Calcula o BF feminino', () => {
        const resultado = calcularBF(35, 'feminino', 69, 170, 33, 89, 107);
        expect(resultado.bf).toBeCloseTo(37.99, 2)
    })

    // TESTES COM VALORES INVÁLIDOS
    it('Retorna mensagem de erro para idade inválida', () => {
        const resultado = calcularBF(-1, 'masculino', 81, 170, 38, 110);
        expect(resultado).toBe('Número zero e números negativos não são permitidos.');
    });

    it('Retorna mensagem de erro para idade superior a 120 anos', () => {
        const resultado = calcularBF(121, 'feminino', 69, 170, 33, 89, 107);
        expect(resultado).toBe('Idade deve ser menor ou igual à 120 anos. Verifique se a idade está correta.')
    })

    it('Retorna mensagem de erro para peso inválido', () => {
        const resultado = calcularBF(32, 'masculino', -1, 170, 38, 110)
        expect(resultado).toBe('Número zero e números negativos não são permitidos.');
    })
    it('Retorna mensagem de erro para peso superior a 430kg', () => {
        const resultado = calcularBF(35, 'feminino', 431, 170, 33, 89, 107);
        expect(resultado).toBe('Peso deve ser menor ou igual à  430kg. Verifique se os dados estão corretos.')
    })

    it('Retorna mensagem de erro para altura inválida ', () => {
        const resultado = calcularBF(32, 'masculino', 81, 0, 38, 110);
        expect(resultado).toBe('Número zero e números negativos não são permitidos.');
    })

    it('Retorna mensagem de erro para altura superior a 255m', () => {
        const resultado = calcularBF(35, 'feminino', 69, 256, 33, 89, 107);
        expect(resultado).toBe('Altura deve ser menor ou igual à 2,55m. Verifique se a altura está correta.')
    })

    it('Retorna mensagem de erro para circunferência de pescoço maior que 55cm', () => {
        const resultado = calcularBF(35, 'feminino', 69, 170, 56, 89, 107);
        expect(resultado).toBe('Circunferência do pescoço deve ser menor ou igual à 55cm. Verifique se os dados estão corretos.');
    })

    it('Retorna mensagem de erro para circunferência da cintura maior que 250m', () => {
        const resultado = calcularBF(35, 'feminino', 69, 170, 33, 251, 107);
        expect(resultado).toBe('Circunferência de cintura deve ser menor ou igual à 2,50m. Verifique se os dados estão corretos.');
    });

    it('Retorna mensagem de erro para circunferência do quadril maior que 250m', () => {
        const resultado = calcularBF(35, 'feminino', 69, 170, 33, 89, 251);
        expect(resultado).toBe('Circunferência de quadril deve ser menor ou igual à  2,50m. Verifique se os dados estão corretos.');
    })

})

//teste isolado (não está funcionando)

// const { calcularBF } = require('./bfat');
// const resultado = calcularBF(32, 'masculino', 81, 1.70, 38, 110);
// console.log('Resultado do BF:', resultado.bf);
