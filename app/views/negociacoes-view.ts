import {Negociacoes} from "../models/negociacoes.js";
import {View} from "./view.js";

/* Um metodo que estende da classe view para declarar o template */
/* classe que renderiza a tabela e cabecalho dos dados capturados pelo formulario */
export class NegociacoesView extends View<Negociacoes>{

    /* Declara o template da view*/
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>    
                            <td>${negociacao.quantidade}</td>    
                            <td>${negociacao.valor}</td>    
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }

}
