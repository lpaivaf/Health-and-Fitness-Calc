//Teste de execução
// Basicamente todos os testes usarão as funções descritas aseguir:
//DESCRABE (describe)-> Declara uma descrição para um bloco de testes - tests swites
//IT or TEST (it or test)-> Declara uma descrição para um único teste unitário - tests case. Estas funçõessão nativas do jest seguido de uma arron function.
//EXPECT (expect) -> Esta função diz qual a espectativa que eu quero do resultado. Se eu colocar um valor fora do esperado o teste não passará

const {sum} = require('./imc') // Criar uma constante referenciando método a ser avaliado e buscar na o endereço do documento.

describe('Initial Test', () =>{ // primeiro a função describe recebeu uma função de "string" e depois uma função de call back(o que chama o resultado)
    it('soma de 2 mumeros', () => { 
        const resultado = sum(2, 3) //criei uma constante resultado e atribui um valor.
        //expect(resultado).toBe(5) //ou
        expect(resultado).toEqual(5)
    })

})


//TESTE IMC

const { calcularIMC } = require('./imc'); // Importa a função para ser testada

describe('Teste do cálculo de IMC', () => {
    it('deve calcular o IMC corretamente para um peso válido', () => {
        const resultado = calcularIMC(70, 1.75); // peso = 70kg, altura = 1.75m
        expect(resultado.imc).toBe('22.86'); // Verifica o IMC calculado
        expect(resultado.diagnostico).toBe('Normal'); // Verifica o diagnóstico
    });

    it('deve retornar mensagem de erro para peso inválido', () => {
        const resultado = calcularIMC(-10, 1.75); // Testa peso inválido
        expect(resultado).toBe('Campos inválidos');
    });

    it('deve retornar mensagem de erro para altura inválida', () => {
        const resultado = calcularIMC(70, 2.56); // Testa altura inválida
        expect(resultado).toBe('Altura inválida');
    });
});




