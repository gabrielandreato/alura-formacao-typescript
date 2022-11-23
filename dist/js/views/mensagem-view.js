import { View } from "./view.js";
export class MensagemView extends View {
    template(textoMensagem) {
        return `
           <p class="alert alert-info">${textoMensagem}</p>
        `;
    }
}
