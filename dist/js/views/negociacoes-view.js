// classe que renderiza a tabela e cabecalho dos dados capturados pelo formulario
export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
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
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>    
                            <td>${negociacao.quantidade}</td>    
                            <td>${negociacao.valor}</td>    
                        </tr>`;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    /* irá atualizar o dom com o template atualizado*/
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
