export class Negociacao {


    constructor(
        private readonly _data: Date,
        private readonly quantidade: number, // formato menos verboso utilizado para declarar propriedades
        private readonly valor: number
    ) {}

    get data(): Date {
        const data = new Date(this.data.getTime()); // utilizado na programação defensiva para garantir imutabilidade
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor
    }
}