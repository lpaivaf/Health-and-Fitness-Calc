## Health & Fitness Calc

## Descrição

**Health & Fitness Calc** é um site simples que permite calcular diversos indicadores relacionados à saúde e fitness, como o Índice de Massa Corporal (IMC), Taxa Metabólica Basal (TMB), Percentual de Gordura Corporal (BF) e Repetição Máxima (RM). O site fornece uma interface intuitiva e fácil de usar, onde os usuários podem inserir seus dados e obter resultados rápidos.

## Funcionalidades

- **Cálculo de IMC:** Avalia a relação entre peso e altura do usuário e fornece um diagnóstico de acordo com os padrões de IMC.
- **Cálculo de TMB:** Estima a quantidade de energia (em calorias) que o corpo do usuário necessita em repouso.
- **Cálculo de Percentual de Gordura Corporal:** Calcula o percentual de gordura corporal baseado em circunferências corporais e altura.
- **Cálculo de Repetição Máxima (RM):** Estima o peso máximo que pode ser levantado em uma repetição, e gera uma tabela com os percentuais de 1RM.

## Estrutura do Projeto

- `index.html`: Contém a estrutura HTML do site.
- `assets/JavaScript/index.js`: Contém os scripts de JavaScript que implementam a lógica dos cálculos de saúde e fitness.
- `assets/CSS/styles.css`: (Se aplicável) Contém o estilo visual da aplicação.
- `assets/images/`: (Se aplicável) Contém as imagens usadas no site.

## Testes Automatizados

Os testes para as funções JavaScript foram desenvolvidos usando Jest. Eles estão localizados em `__tests__/` e cobrem os cenários principais, como entradas inválidas, entradas extremas e cálculos corretos.

## Requisitos

- Navegador Web Moderno (Google Chrome, Firefox, Edge)
- Node.js (para rodar os testes com Jest)

## Página

[![](image/healthfitnesscalc.png)](https://lpaivaf.github.io/Health-and-Fitness-Calc/)

## Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/lpaivaf/Health-and-Fitness-Calc.git
   cd health-fitness-calc
   ```

2. **Abrir o arquivo HTML:**
   - Localize o arquivo `index.html` e abra-o em um navegador web.

3. **Executar os testes:**
   - Instale as dependências necessárias:
     ```bash
     npm install
     ```
   - Execute os testes com o Jest:
     ```bash
     npm test
     ```

## Como Usar

1. Escolha o tipo de cálculo que deseja fazer (IMC, TMB, BF, RM) clicando nas opções do menu lateral.
2. Insira os dados solicitados.
3. Clique no botão "Calcular" para obter o resultado.
4. Use o botão "Limpar" para redefinir os campos e realizar novos cálculos.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
