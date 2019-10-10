import { Pai } from './testes/pai'

interface Modelo {
  metodo(): string
}


class Teste implements Modelo {
  nome: string
  private _sobrenome: string
  obs: string
  constructor(
    nome: string = 'joao', sobrenome: string,
    private readonly idade: number, obs: string,
  ) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.obs = obs
  }

  public get sobrenome(): string {
    return this._sobrenome
  }

  public set sobrenome(value: string) {
    this._sobrenome = value
  }

  metodo(): string {
    return 'Testando método teste '
  }
}

const teste = new Teste('João', 'Paulo', 1, 'Observação inicial')

console.log(teste.metodo())
console.log('Nome: ', teste.nome)
console.log('Sobrenome: ', teste.sobrenome)
teste.sobrenome = 'Sobrenome alterado'
console.log('Sobrenome: ', teste.sobrenome)

console.log('Observação: ', teste.obs)
teste.obs = 'Observação alterada'
console.log('Observação nova: ', teste.obs)
