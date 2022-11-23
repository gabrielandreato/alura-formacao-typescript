import {View} from "./view.js";

/* Um metodo que estende da classe view para declarar o template */
export class MensagemView extends View<string> {

    protected template(textoMensagem: string): string {
        return `
           <p class="alert alert-info">${textoMensagem}</p>
        `
    }
}