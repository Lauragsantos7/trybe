import { Conta } from "./Conta";

export default class ContaPoupanca extends Conta {
// prevê o rendimento anual com base no saldo.
private _juroAnual: number;
constructor(_juroAnual: number, _clientName: string, cpf: string) {
    super(_clientName, 100, cpf); // para se referenciar à classe mãe.
    // todos que abrem uma conta poupanç recebem 100 reais de bônus, por isso está fixo no constructor o valor 100.
    this._juroAnual = _juroAnual;

}
preverRendimento() {
    return this.getBalance * this._juroAnual
   //return this.getBalance * 0.13; // juro fixo, só essa linha de código. Pra juro dinâmico, passar juro como parametro, fazer um constructor. Se não fizer constructor, o utilizado é idêntico ao da classe mãe
}


};