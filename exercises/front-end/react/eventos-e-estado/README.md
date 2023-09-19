# Tipagem

normalmente o retorno de uma função é inferido automaticamente, então, não precisa definir o tipo de retorno

Tipando objeto: export function greeting(person: {firstName: string, lastName: string}) {
   return ....
}

Verificação de tipos pelo TypeScript
Ao executar um código TypeScript, ele verifica se o código apresenta algum erro de tipo e, caso esteja tudo certo, é transpilado para um código JavaScript. Utilize o código abaixo para fazer essa verificação (também chamada de type-checking):
npx tsc


# Hooks
São funções especiais que permitem 'enganchar' funcionalidades aos componentes de função.

Você nunca poderá chamar um Hook dentro de um if. Também não poderá chamá-lo dentro de um loop ou de uma função aninhada. Os Hooks precisam ser chamados no top level (raiz) do componente funcional.

É um caso de uso incomum, mas se você quiser atualizar a mesma variável de estado várias vezes antes da próxima renderização, em vez de passar o próximo valor de estado como setNumber(number + 1), você pode passar uma função que calcula o próximo estado com base no anterior em a fila, como setNumber(n => n + 1). É uma forma de dizer ao React para “fazer algo com o valor do estado” em vez de apenas substituí-lo.

  <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>


    