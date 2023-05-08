import Conta from "../Bank/Contas/Conta";

export default interface IContaModel {
    findById(id:number): Promise<Conta> | null
};