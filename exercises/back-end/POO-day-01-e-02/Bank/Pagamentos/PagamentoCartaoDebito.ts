import { IEfetivavel } from "../Interfaces/Efetivavel";
import { Pagamento } from "./Pagamento";

export class PagamentoCartaoDebito extends Pagamento implements IEfetivavel {
// é uma boa prática utilizar o implements 'interface' pq caso sejam esquecidas as propriedades ali previstas, o TS acusa o erro.
    public efetivar(): string {
        const valor = this.getValor;
        this.getOrigem.debit(valor);
        this.getDestino.credit(valor);
        const codigoTransacao = this.gerarCodigoTransacao();
        return codigoTransacao;
    };

};