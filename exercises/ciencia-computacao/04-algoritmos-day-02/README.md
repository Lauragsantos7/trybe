# Recursividade 

**Pilha de chamadas** 

Também conhecida como call stack, organiza sub rotinas que estão executando no computador. 

Toda vez que chamamos uma funçãoem um programa, o SO reserva memória para as variáveis e parâmetros da função; qdo a funçãoé executada, ela é guardada na pilha; quando a função termina de ser executada, ela sai da pilha

Na maioria das vezes, função iterativa tem melhor performance do que a recursiva.

A recursiva diminui a complexidade do código, o código fica mais simples, mais harmonioso.

**Análise de algoritmos recursivos**

Árvore de recursão: estima o custo de um algoritmo. 
Cada nó da arvore representa o custo da suloção de um subproblema.
A forma de traduzir a lógica da árvore de recursão para uma notação puramente matemática se chama TEOREMA MESTRE

Stack overflow = estouro de pilhas. Pode acontecer caso usemos uma função recursiva mto gde


**Estratégias para solução de problemas**
- iterativa: caracterizada pela repetição de determinada operação, procurando resolver algum problema . A cada iteração, utiliza-se o resultado anterior com parâmetro de entrada para o cálculo seguinte.

- força bruta: tentativa e erro, busca exaustiva. Enumerar todas as combinações possíveis e avaliar se satisfazem o problema. 

- dividir e conquistar: divide o problema em partes menores, encontra soluções para as partes e so entã combina as soluções obtidas em uma solução global.

