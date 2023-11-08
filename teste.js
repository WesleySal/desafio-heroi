class heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando o ${this.ataque}.`)
    }
}

let ninja = new heroi("Wesley", 22, "ninja", "usou shuriken")

let mago = new heroi("Wesley", 22,"mago", "usou magia")

ninja.atacar()

mago.atacar()