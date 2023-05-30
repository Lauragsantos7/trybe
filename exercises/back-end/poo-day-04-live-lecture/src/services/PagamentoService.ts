import PagamentoPix from "../Bank/Pagamentos/PagamentoPix";
import IContaModel from "../models/ContaModel";
import IPagamentoPixModel from "../models/PagamentoModel";

type EfetivarPixParams = {
    contaOrigemId: number;
    contaDestinoId: number;
    chavePix: string;
    valor: number;
};

export default class PagamentoService {
    private _pagamentoModel: IPagamentoPixModel;
    private _contaModel: IContaModel

    constructor(
        pagamentoModel: IPagamentoPixModel,
        contaModel: IContaModel,
    ) {
        this._contaModel = contaModel;
        this._pagamentoModel = pagamentoModel
    }

    async efetivarPix(params: EfetivarPixParams): Promise<{ codTransacao: string }> {
        const contaDestino = await this._contaModel.findById(params.contaDestinoId);
        if(!contaDestino) throw new Error('CONTA_NAO_ENCONTRADA')

        const contaOrigem = await this._contaModel.findById(params.contaOrigemId)
        if(!contaOrigem) throw new Error('CONTA_NAO_ENCONTRADA')

        const pagamentoPix = new PagamentoPix(params.chavePix, {
            origem: contaOrigem, 
            destino: contaDestino,
            valor: params.valor,
            pagamento: new Date()
        });

        const codTransacao = pagamentoPix.efetivar();
        this._pagamentoModel.save(pagamentoPix);

        return { codTransacao }
    }
}