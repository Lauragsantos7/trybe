import { Peca } from "./Peca";

export class PecaTorre extends Peca {
    constructor(cor: 'branca' | 'preta') {
        super(cor, 'torre')
    }
mover(): void {
    console.log('linha reta');
};

getValor(): number{
   return 5;
}
}