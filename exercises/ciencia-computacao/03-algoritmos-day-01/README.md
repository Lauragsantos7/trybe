# Algoritmos e complexidade do código

Algoritmo é qualquer procedimento computacional bem definido que tom alguma valor ou conjunto de valores como entrada e produz algum valor ou ocjunto de valores como saída. É uma sequência de etapas computacionais que transformam a entrada na saída.

**Complexidade:** taxa de crescimento do tempo de execução de um algoritmo; qto maior a taxa, maior é seu tempo de execução e portanto, sua complexidade.
 - dado que o algoritmo é linearmente proporcional ao tempo de execução, dizemos que ele é **linear** . Função matemática que representa: f(n) = n. Ordem de complexidade: O(n)
Quando calculamos a complexidade de espaço não levamos em consideração o espaço ocupado pela entrada, uma vez que o tamanho da entrada não é algo que podems, com nosso algoritmo, influenciar.
Se fala-se em ordem de complexidade, sem especificar se é de tempo ou de espaço, assuma que é de tempo.
  - Complexidade quadrática: 
  Exemplo de código: 
  Os arrays têm sempre o mesmo tamanho
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result
Se os arrays possuem 2 elementos, serão necessárias 4 interações; se possuírem 3 elementos, serão necessaŕias 9..assim por diante. A complexidade do algoritmo é dada por O(n²)

**Comparando complexidades:** 
- complexidade O(1): constante: o tempo de execução do algortimo independe do valor de entrada;
- complexidade O(n): linear: a taxa de crescimento em seu tempo de execução é linear;
- complexidade O(n²): quadrática: a taxa de crescimento do tempo de execução do algoritmo é quadrática - se aumentarmos a entrada em 2x, aumentamos o tempo de execução em 4(ou 2²)
- complexidade O(n³): cúbica: se aumentarmos a entrada em 2x, aumentamos o tempo de execução em 8(2³) (for dentro de for dentro de for)

***Complexidade Logaritmica:*** O(log n) - tem uma alteração na taxa de execução que, gralemtne reduz pela metade o tempo de finalização das iterações ao reduzir pela metade o tamanho do input a cada iteração

O número de operações para executar o algoritmo logarítmico tem uma relação inversa ao tamanho da entrada: quanto maior ela é, menor o número de operações e, consequentemente, menor o tempo para a execução do algoritmo!

***Complexidade Exponencial e Fatorial:*** para aumentos pequenos no tamanho da entrada, aumentam enormemente o número de operações a serem realizadas para serem executados e, consequentementem seu tempo de execução. A relação de execução/espaço ocupado em cada caso é a seguinte:

Exponencial: 2^n(O(2^n))

Fatorial: n! (O(n!))

Problemas que não têm solução conhecida em tempo polinomial, e que podem ser resolvidos apenas com força bruta, com complexidades exponencial ou fatorial, são chamados NP Completo.

**for aninhado: multiplica a complexidade. For alinhado: soma a complexidade**