export class People {

    nome: string;
	idade: number;
	peso: number;
	altura: number;
	ehDev: boolean;

    constructor(nome: string, idade: number, peso: number, altura: number, ehDev: boolean){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.ehDev = ehDev;
    }

    getNome(): string{
        return this.nome;
    }

    getIdade(): number{
        return this.idade;
    }

    getPeso(): number{
        return this.peso;
    }

    getAltura(): number{
        return this.altura;
    }

    getEhDev(): boolean{
        return this.ehDev;
    }
}