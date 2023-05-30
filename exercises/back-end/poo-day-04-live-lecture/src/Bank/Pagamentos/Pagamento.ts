import Conta from "../Contas/Conta";
import crypto from 'node:crypto';

export type PagamentoParams = {
    origem: Conta;
    destino: Conta;
    valor: number;
    pagamento: Date;
};

export default abstract class Pagamento {
    private _origem: Conta;
    private _destino: Conta;
    private _valor: number;
    private _pagamento: Date;
    private static valorMin = 0;

    // mtos parâmetros o lint reclama e o ideal é colocar como um objeto:
    constructor(params: PagamentoParams) {
        Pagamento.validarValor(params.valor); // valida antes de fazer as atribuições S2
        this._origem = params.origem;
        this._destino = params.destino;
        this._valor = params.valor;
        this._pagamento = params.pagamento;
    };

    private static validarValor(valor: number) {
        // se não usa o this, é estático. 
        if (valor < Pagamento.valorMin) {
            throw new Error('VALOR_INVALIDO');
        }
    };

    abstract efetivar(): string;

    get getOrigem() {
        return this._origem;
    };

    get getDestino() {
        return this._destino;
    };

    get getValor() {
        return this._valor;
    };

    get getPagamento() {
        return this._pagamento;
    };


    protected gerarCodigoTransacao(): string {
        // const timesTamp = Date.now(); ou:
        const now = new Date();
        const timesTemp = this._pagamento.getTime();
        const uuid = crypto.randomUUID();
        // console.log(`${timesTemp}-${uuid}`)
        return `${timesTemp}-${uuid}`
    };
};