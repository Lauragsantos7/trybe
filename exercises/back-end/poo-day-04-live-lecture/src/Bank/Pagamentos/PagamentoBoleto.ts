import Pagamento, {PagamentoParams } from "./Pagamento"
import crypto from 'node:crypto'

export default class PagamentoBoleto extends Pagamento {
    private _dataVencimento : Date;
    constructor(_dataVencimento: Date, params: PagamentoParams) {
        super(params); 
        this._dataVencimento = _dataVencimento;
    }

    public efetivar(): string {
           const valorFinal = this.calculaValorFinal();
           this.getOrigem.debit(valorFinal);
           this.getDestino.credit(valorFinal);
           const codigoTransacao = this.gerarCodigoTransacao();
           return codigoTransacao;
       };

    
    private calculaValorFinal() {
        const valor = this.getValor;
        if (this.estaVencido()) {
            return valor * 1.2;
        }
        return valor;
    };

    private estaVencido() {
        return this.getPagamento.getTime() > this._dataVencimento.getTime()
    };

};