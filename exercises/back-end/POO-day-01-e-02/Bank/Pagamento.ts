import { Conta } from "./Conta";
import crypto from 'node:crypto';

export class Pagamento {
    origem: Conta;
    destino: Conta;
    valor: number;
    vencimento: Date;
    pagamento: Date;

    // mtos parâmetros o lint reclama e o ideal é colocar como um objeto:
    constructor( params: {
        origem: Conta;
        destino: Conta;
        valor: number;
        vencimento: Date;
        pagamento: Date;
    }
    ) {
      this.origem = params.origem;
      this.destino = params.destino;
      this.valor = params.valor;
      this.vencimento = params.vencimento;
      this.pagamento = params.pagamento;

    }

    public efetivar(): string {
        const valorFinal = this.calculaValorFinal();
        this.origem.debit(valorFinal);
        this.destino.credit(valorFinal);
        const codigoTransacao = this.gerarCodigoTransacao();
        return codigoTransacao;
    };

    private gerarCodigoTransacao(): string {
       // const timesTamp = Date.now(); ou:
       const now = new Date();
       const timesTemp = this.pagamento.getTime();
       const uuid = crypto.randomUUID();
       // console.log(`${timesTemp}-${uuid}`)
       return `${timesTemp}-${uuid}`
    };

    private calculaValorFinal() {
        if (this.estaVencido()) {
            return this.valor * 1.2;
        }
        return this.valor;
    };

    private estaVencido() {
        return this.pagamento.getTime() > this.vencimento.getTime()
    };
}