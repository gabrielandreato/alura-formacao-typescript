import { View } from "./view.js";
// classe que renderiza a tabela e cabecalho dos dados capturados pelo formulario
export class NegociacoesView extends View {
    /* Declara o template da view*/
    template(model) {
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
                        </tr>`;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
