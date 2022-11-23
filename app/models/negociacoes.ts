import {Negociacao} from "./negociacao.js";

 // classe que contem o array e metodos para manipulação do mesmo
export class Negociacoes  {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}