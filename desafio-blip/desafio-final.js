// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Use este template para praticar a manipulação de objetos e strings.

// Classe que representa um herói de aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        // Define o ataque baseado no tipo do herói
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque";
                break;
        }
        
        // Exibe a mensagem de ataque
        print(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso:
const heroi1 = new Heroi("Gandalf", 1000, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Bruce Lee", 32, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar();

