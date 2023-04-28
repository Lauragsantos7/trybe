// Criar conta com valor depositado inicialmente;
// realizar débito na conta, desde que a pessoa possua saldo;
// realizar pagamento, debitando na conta de origem e creditando na de destino
// pagamento deve ter vencimento, e caso pago vencido, acrescer multa de 20%

export class Conta {
    private _clientName: string;
    private _initialBalance: number;

    // constructor é executado no momento da criação de uma nova instância de Conta.
    constructor(_clientName: string, _initialBalance: number) {
        if(_initialBalance < 200) {
            throw new Error('DEPÓSITO_INSUFICIENTE')
        }
        this._clientName = _clientName;
        this._initialBalance = _initialBalance;
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
    getBalance() {
        return this._initialBalance;
    }

    // Método TS:
    get balance() {
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