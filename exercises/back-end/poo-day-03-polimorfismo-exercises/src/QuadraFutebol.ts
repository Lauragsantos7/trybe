import Quadra from "./Quadra";
import { IAgenda } from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";

export default class QuadraFutebol extends Quadra {

 reservar(agenda: IAgenda) {
    return {
        // protocolo é o "id" da reserva, gere de forma aleatória
        protocolo: 'q39tgorea9',
        date: '2022-11-03T17:53:24.393Z',
        regras: { chuteira: 'cravo' }
      }
 }
}