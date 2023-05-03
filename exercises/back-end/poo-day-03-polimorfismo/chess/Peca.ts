export abstract class  Peca {
   private _cor: 'branca' | 'preta';
   private _tipo: 'bispo' | 'torre';

    constructor(
        cor: 'branca' | 'preta',
        tipo: 'bispo' | 'torre'
    ) {
        this._cor = cor;
        this._tipo = tipo;
    }

     abstract mover(): void
     abstract getValor(): number
    
     get getCor() {
        return this._cor
     };

     get getTipo() {
        return this._tipo
     };
}