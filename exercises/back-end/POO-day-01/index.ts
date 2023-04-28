import { Conta } from "./Bank/Conta";
import { Pagamento } from "./Bank/Pagamento";

const conta1 = new Conta('Laura', 200);
const conta2 = new Conta('Ana', 300)

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
netFlix.efetivar();

console.log('conta1', conta1)
console.log('conta2', conta2)