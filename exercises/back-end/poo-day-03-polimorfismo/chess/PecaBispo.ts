import { Peca } from "./Peca";

export class PecaBispo extends Peca {
    constructor(cor: 'branca' | 'preta') {
        super(cor, 'bispo')
    }
mover(): void {
    console.log('diagonal');
};

getValor(): number{
   return 3;
}
}