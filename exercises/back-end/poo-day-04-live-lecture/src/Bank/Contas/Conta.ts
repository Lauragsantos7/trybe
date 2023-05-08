// Criar conta com valor depositado inicialmente;
// realizar débito na conta, desde que a pessoa possua saldo;
// realizar pagamento, debitando na conta de origem e creditando na de destino
// pagamento deve ter vencimento, e caso pago vencido, acrescer multa de 20%

import { Cpf } from "../Cpf";

export type contaParams = {
    clientName: string
    saldo: number,
    cpf: string, 
    id: number
}

export default abstract class Conta {
    private _id: number;
    private _clientName: string;
    protected _saldo: number;
    private _cpf: Cpf; //_cpf é uma instância da classe Cpf
    // protected dá acesso à propriedade nas classes filhas

    private static depositoMin = 50; // static pq não altera nunca esse valor. Está ligado à classe

    // constructor é executado no momento da criação de uma nova instância de Conta.
    constructor(params: contaParams) {
        this._clientName = params.clientName;
        this._saldo = params.saldo;
        this._cpf = new Cpf(params.cpf);
        this._id = params.id;
    }

    // private static validarDeposito(deposito: number){
    //     if(deposito < Conta.depositoMin) {
    //         throw new Error('DEPÓSITO_INSUFICIENTE')
    //  }
    // }

    // abstração de comportamentos: 
    public abstract debit(value: number): void

    public credit(value: number) {
        if (value < 0) {
            throw new Error('VALOR_NÃO_PODE_SER_NEGATIVO')
        }
        this._saldo += value;
    };



    // métodos de acesso: getter: ler propriedade privada
    // método tradicional: 
    // getBalance() {
    //     return this.saldo;
    // }

    // Método TS:
    get getBalance() {
        return this._saldo;
    }

    get getNameCliente() {
        return this._clientName.toUpperCase();
    }

    // setter: alterar valor
    // Fazer as validações dentro dos setters
    set setBalance(newBalance: number) {
        if (newBalance < 0) {
            throw new Error('SALDO_INVALIDO')
        }
        this._saldo = newBalance;
    }

    set setName(newName: string) {
        if (newName.length === 0) {
            throw new Error('NOME_VAZIO')
        }
        this._clientName = newName;
    }

    public get getId() {
        return this._id;
    }
}