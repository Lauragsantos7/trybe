# Ordenação e busca

            **Ordenação**

A ordenação pode ser numérica, lexicográfica ou de qqr coutra categoria. 

*Selection Sort*

*Insertion Sort*

*Soluções iterativas* realizam uma ou mais operações repetidas vezes, por meio de comandos de repetição

**Buble Sort* - ordenação por bolha.São realizadas múltiplas iterações sobre a coleção, sempre comparando o valor ao adjacente e realizando a troca daqueles que estão fora de ordem. A cada iteração o proximo maior valor é colocado em sua posição correta, ou seja, cada item se desloca como uma bolha para a posição a qual pertence

*Merge Sort* ordenação por mistura. divide-se a coleção e porçoes menores até atingir uma coleção mínima. Em seguida, mistura-se as porções de forma ordenada até que toda a coleção seja reunida novamente resultando na ordenação.

 *Quick sort* determina um elemento pivô(elemento que divide o array em porções menores). em seguida, todos os elementos maiores que o pivô são colocado à direita e os menores à esquerda. Recursivamente ordenamos os sub arryas repetindo o mesmo processo de escolha do pivô e particionamento.

 Além disso, o quicksort possui dois procedimentos:

Função quicksort: nela a coleção será particionada de acordo com o pivô;
Função partition: ela é a chave para o algoritmo. Nela, a coleção será reorganizada.

          **Algoritmos de busca**


Buscam um item com uma determinada propriedade dentro de uma coleção.
Não devem ser associados somente com arrays.

*Busca linear* percorre toda a estrutura elemento a elemento, tentando encontrar um valor. Conhecida como busca sequencial.

* Busca binária* supões que a coleção está ordenada e seu funcionamento se dá atraves de múltiplas divisões do espaço de busca, reduzindo-o buscando o elemento no meio do espaço
