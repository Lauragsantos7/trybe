import PagamentoPix from "../Bank/Pagamentos/PagamentoPix";

export default interface IPagamentoPixModel {
    save(pagamentoPix: PagamentoPix): Promise<void>
};