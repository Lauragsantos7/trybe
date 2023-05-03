import { Conta } from "./Bank/Conta";
import ContaPoupanca from "./Bank/ContaPoupanca";
import { ContaPoupancaPremium } from "./Bank/ContaPoupancaPremium";
import { IEfetivavel } from "./Bank/Interfaces/Efetivavel";
import { Pagamento } from "./Bank/Pagamentos/Pagamento";
import { PagamentoBoleto } from "./Bank/Pagamentos/PagamentoBoleto";
import { PagamentoCartaoDebito } from "./Bank/Pagamentos/PagamentoCartaoDebito";


const conta1 = new ContaPoupanca(0.1, 'Laura', '123.456.789-12');
const conta2 = new ContaPoupancaPremium(0.1, 'Ana', '123.123.123-00');

// setter: alterar propriedade
 conta1.setName = 'Rosa'

 // conta1.setBalance = -5 Cai no erro de validação feito no setter setBalance
 // conta1.debit(100);
 // conta1.credit(200);

// getters: ler os atributos
// console.log(conta1.nameCliente, conta1.balance);


const netFlix = new PagamentoBoleto(
    new Date('2024-03-27'),
    {
    origem: conta1,
    destino: conta2,
    valor: 30,
    pagamento: new Date(),
});

const pagtoDebito = new PagamentoCartaoDebito({
    origem: conta1,
    destino: conta2,
    valor: 10,
    pagamento: new Date()
});
// console.log(pagtoDebito.efetivar())

// console.log(netFlix.efetivar());
//  console.log(conta2.getBalance)
//  console.log(conta1.getBalance)


const rendimento = conta1.preverRendimento();
const rendContaPremium = conta2.preverRendimento()
// essa função está em ContaPoupanca


// console.log('conta1', conta1)
// console.log('conta2', conta2)

// console.log(rendimento);
//console.log(rendContaPremium);

// fazer vários pagamentos ao mesmo tempo: criar uma interface que tenha  a função efetivar dentro para que aceite o 'pagamento.efetivar()'. Debito e boleto possuem 'efetivar' em suas classes, não dará erro
function efetivarPagamentos(pagamentos: IEfetivavel[]) {
    pagamentos.forEach((pagamento) => {
        pagamento.efetivar();
    })
};

efetivarPagamentos([pagtoDebito, netFlix])
console.log(conta2.getBalance)
console.log(conta1.getBalance)