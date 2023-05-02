import { Conta } from "./Bank/Conta";
import ContaPoupanca from "./Bank/ContaPoupanca";
import { ContaPoupancaPremium } from "./Bank/ContaPoupancaPremium";
import { Pagamento } from "./Bank/Pagamento";

const conta1 = new ContaPoupanca(0.1, 'Laura', '123.456.789-12');
const conta2 = new ContaPoupancaPremium(0.1, 'Ana', '123.123.123-00');

// setter: alterar propriedade
 conta1.setName = 'Rosa'

 // conta1.setBalance = -5 Cai no erro de validação feito no setter setBalance
 // conta1.debit(100);
 // conta1.credit(200);

// getters: ler os atributos
// console.log(conta1.nameCliente, conta1.balance);


const netFlix = new Pagamento({
    origem: conta1,
    destino: conta2,
    valor: 30,
    vencimento: new Date('2022-03-27'),
    pagamento: new Date(),
});
const pag = netFlix.efetivar();
console.log(pag)

const rendimento = conta1.preverRendimento();
const rendContaPremium = conta2.preverRendimento()
// essa função está em ContaPoupanca


// console.log('conta1', conta1)
// console.log('conta2', conta2)

// console.log(rendimento);
//console.log(rendContaPremium);