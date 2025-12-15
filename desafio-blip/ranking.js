// Função que calcula o nível do jogador baseado nas vitórias
function calcularNivel(vitorias) {
    if (vitorias <= 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função principal que recebe vitórias e derrotas e retorna o resultado
function calcularRankeadas(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    const nivel = calcularNivel(vitorias);
    return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
}

// Entrada do usuário
const vitorias = parseInt(gets());
const derrotas = parseInt(gets());

// Chama a função e imprime o resultado
const resultado = calcularRankeadas(vitorias, derrotas);
print(resultado);
