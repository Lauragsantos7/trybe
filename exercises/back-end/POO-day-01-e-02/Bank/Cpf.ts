
export class Cpf {
    private _valor: string;

  constructor(valor: string){
    const cpfRegex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
    if (!cpfRegex.test(valor)) {
    throw new Error('CPF_INVALIDO');
}
this._valor = valor;
}

};