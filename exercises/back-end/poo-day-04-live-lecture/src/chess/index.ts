import { Peca } from "./Peca";
import { PecaBispo } from "./PecaBispo";
import { PecaTorre } from "./PecaTorre";

const bispoBranco = new PecaBispo('branca');
const torrePreta = new PecaTorre('preta');

console.log(bispoBranco);
console.log(torrePreta);

function moverPeca(peca: Peca) {
    peca.mover();
};

moverPeca(bispoBranco);
moverPeca(torrePreta);