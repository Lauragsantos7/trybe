import Conta, { contaParams } from "./Conta";

export default class ContaPoupanca extends Conta {
// prevê o rendimento anual com base no saldo.
private _juroAnual: number;

constructor(
    _juroAnual: number, contaParams: contaParams) {
    super(contaParams); // para se referenciar à classe mãe.
    // todos que abrem uma conta poupanç recebem 100 reais de bônus, por isso está fixo no constructor o valor 100.
    this._juroAnual = _juroAnual;

}

debit(valor: number) {
    const finalBalance = this._saldo - valor;
    //     if (finalBalance < 0) {
    //         throw new Error('SALDO_INSUFICIENTE');
    //     }
    //     this._saldo = finalBalance;
}

preverRendimento() {
    return this.getBalance * this._juroAnual
   //return this.getBalance * 0.13; // juro fixo, só essa linha de código. Pra juro dinâmico, passar juro como parametro, fazer um constructor. Se não fizer constructor, o utilizado é idêntico ao da classe mãe
}


// public abstract debit(value: number) {
//     const finalBalance = this._saldo - value;
//     if (finalBalance < 0) {
//         throw new Error('SALDO_INSUFICIENTE');
//     }
//     this._saldo = finalBalance;
// };

};