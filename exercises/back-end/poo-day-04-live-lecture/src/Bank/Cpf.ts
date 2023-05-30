export class Cpf {
    private _valor: string;

 // qdo um determinado valor é fixo, e será utilizado várias vezes sem alteração de valor, pode-se usar o static antes de sua definição, pq faz parte da definiçãoda classe e não apenas a cada instancia 
  private static cpfRegex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

  constructor(valor: string){
  
    if (!Cpf.cpfRegex.test(valor)) {
    throw new Error('CPF_INVALIDO');
}
this._valor = valor;
}

};