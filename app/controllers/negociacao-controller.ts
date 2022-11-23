import {Negociacao} from "../models/negociacao.js";
import {Negociacoes} from "../models/negociacoes.js";
import {NegociacoesView} from "../views/negociacoes-view.js";
import {MensagemView} from "../views/mensagem-view.js";
import {DiasDaSemana} from "../enums/dias-da-semana.js";




// classe que manipula o dom e executa os metodos.
export class NegociacaoController {
    /* Declara todos os elementos que serão utilizados no codigo*/
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView'); // seta o parametro de update
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes); // metodo que atualiza o dom
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        )
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias uteis são permitidas.')
            return ;
        }
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
    }

    private ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes); // faz o update da lista criada em negociacoes-view
        this.mensagemView.update('Adicionado com sucesso !')
    }
}