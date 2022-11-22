// classe com propriedades e metodos do objeto negociação
export class Negociacao {
    constructor(_data, quantidade, valor // formato menos verboso utilizado para declarar propriedades
    ) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); // utilizado na programação defensiva para garantir imutabilidade
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
