import ContaPoupanca from "./ContaPoupanca";

export class ContaPoupancaPremium extends ContaPoupanca {

    constructor(juroAnual: number, clientName: string, cpf: string) {
        super(juroAnual, clientName, cpf)
        this.credit(200);
        // conta poupança premium já se inicia com 300 reais de brinde 
       
    }
}