
 // classe com propriedades e metodos do objeto negociação
export class Negociacao {
    constructor(
        private _data: Date,
        public quantidade: number,
        public valor: number // formato menos verboso utilizado para declarar propriedades
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime()); // utilizado na programação defensiva para garantir imutabilidade
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor
    }

    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}