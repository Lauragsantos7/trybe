import  Pagamento, { PagamentoParams } from "./Pagamento";

export  default class PagamentoPix extends Pagamento {
    private _chavePix: string

    constructor(chavePix: string, params: PagamentoParams) {
      super(params)
      this._chavePix = chavePix;
    };

    efetivar(): string {
        const valor = this.getValor;
        this.getOrigem.debit(valor);
        this.getDestino.credit(valor);
        const codigoTransacao = this.gerarCodigoTransacao();
        return codigoTransacao;
    }

    protected gerarCodigoTransacao(): string {
        const codigoPadrao = super.gerarCodigoTransacao();
        // aproveitando o gerarCodigo da classe mae, que já tem o timestamp e o uuid
        
         return `${codigoPadrao}-${this._chavePix}`
    }
};