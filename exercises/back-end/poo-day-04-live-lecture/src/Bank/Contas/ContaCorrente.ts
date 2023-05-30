import Conta, { contaParams } from "./Conta"

export default class ContaCorrente extends Conta {
    private _limite : number

    constructor(limite: number, params: contaParams) {
        super(params)
        this._limite = limite;
    }

    public debit(valor: number): void {
        const saldoFinal = this._saldo - valor
        if (saldoFinal < Math.abs(this._limite) * -1) {
            throw new Error('SALDO_ESTOUROU_LIMITE')
        } this._saldo = saldoFinal;
    }

}