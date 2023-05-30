import { Conta } from "../Conta";
import crypto from 'node:crypto';

export type PagamentoParams = {
    origem: Conta;
    destino: Conta;
    valor: number;
    pagamento: Date;
}; 

export class Pagamento {
    origem: Conta;
    destino: Conta;
    valor: number;
    pagamento: Date;

    // mtos parâmetros o lint reclama e o ideal é colocar como um objeto:
    constructor( params:  PagamentoParams) {
      this.origem = params.origem;
      this.destino = params.destino;
      this.valor = params.valor;
      this.pagamento = params.pagamento;

    }

    // public efetivar(): string {
    //     const valorFinal = this.calculaValorFinal();
    //     this.origem.debit(valorFinal);
    //     this.destino.credit(valorFinal);
    //     const codigoTransacao = this.gerarCodigoTransacao();
    //     return codigoTransacao;
    // };


    get getOrigem() {
        return this.origem;
    }

    get getDestino() {
        return this.destino;
    };

    get getValor() {
        return this.valor;
    };

    get getPagamento() {
        return this.pagamento;
    };

    
    protected gerarCodigoTransacao(): string {
        // const timesTamp = Date.now(); ou:
        const now = new Date();
        const timesTemp = this.pagamento.getTime();
        const uuid = crypto.randomUUID();
        // console.log(`${timesTemp}-${uuid}`)
        return `${timesTemp}-${uuid}`
     };
};
