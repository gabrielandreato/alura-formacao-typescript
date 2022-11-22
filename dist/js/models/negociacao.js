export class Negociacao {
    constructor(_data, quantidade, // formato menos verboso utilizado para declarar propriedades
    valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this.data.getTime()); // utilizado na programação defensiva para garantir imutabilidade
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
