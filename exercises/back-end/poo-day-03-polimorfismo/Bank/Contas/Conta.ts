// Criar conta com valor depositado inicialmente;
// realizar débito na conta, desde que a pessoa possua saldo;
// realizar pagamento, debitando na conta de origem e creditando na de destino
// pagamento deve ter vencimento, e caso pago vencido, acrescer multa de 20%

import { Cpf } from "../Cpf";

export class Conta {
    private _clientName: string;
    private _initialBalance: number;
    private _cpf: Cpf; //_cpf é uma instância da classe Cpf
    // protected dá acesso à propriedade nas classes filhas

    private static depositoMin = 50; // static pq não altera nunca esse valor. Está ligado à classe

    // constructor é executado no momento da criação de uma nova instância de Conta.
    constructor(_clientName: string, _initialBalance: number, cpf: string) {
        Conta.validarDeposito(_initialBalance)
        this._clientName = _clientName;
        this._initialBalance = _initialBalance;
        this._cpf = new Cpf(cpf);
    }

    private static validarDeposito(deposito: number){
        if(deposito < Conta.depositoMin) {
            throw new Error('DEPÓSITO_INSUFICIENTE')
     }
    }
    // abstração de comportamentos: 
    public debit(value: number) {
        const finalBalance = this._initialBalance - value;
        if (finalBalance < 0) {
            throw new Error('SALDO_INSUFICIENTE');
        }
        this._initialBalance = finalBalance;
    };

    public credit(value: number) {
        if (value < 0) {
            throw new Error('VALOR_NÃO_PODE_SER_NEGATIVO')
        }
        this._initialBalance += value;
    };



    // métodos de acesso: getter: ler propriedade privada
    // método tradicional: 
    // getBalance() {
    //     return this._initialBalance;
    // }

    // Método TS:
    get getBalance() {
        return this._initialBalance;
    }

    get nameCliente() {
        return this._clientName.toUpperCase();
    }

    // setter: alterar valor
    // Fazer as validações dentro dos setters
    set setBalance(newBalance: number) {
        if (newBalance < 0) {
            throw new Error('SALDO_INVALIDO')
        }
        this._initialBalance = newBalance;
    }

    set setName(newName: string) {
        if (newName.length === 0) {
            throw new Error('NOME_VAZIO')
        }
        this._clientName = newName;
    }
}