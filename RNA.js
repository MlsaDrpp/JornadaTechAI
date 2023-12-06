// Função número aleatório
function randomRange(min, max) 
{
    return Math.random() * (max - min) + min;
}

// Função interpolação linear 
function lerp(a, b, t) 
{
    return a+ (b - a) * t;
}

// Classe neurônio
class Neuron
 {
    constructor(inputs)
    {
        this.bias = randomRange(-1, 1);
        this.weightList = new Array(inputs)
        .fill()
        .map(() => randomRange(-1, 1))
    }
}

// Saída neurônio
g(signalList = [])i
{
    let u = 0;
    //calcular a soma dos sinais para verificar os pesos
    for(let i = 0; i < this.weightList.lenght; i++)
    {
        u += signalList[i] * this.weightList[i]
    }
    if(Math.tanh(u) > this.bias)
    {
        return 1; // bias ativado
    }
    else return 0; // bias desativa
}

// Classe e função para mutação dos pesos do Bias
Mutate(rate = 1);
{
    this.weightList = this.weightList.map(() =>
    {
        return lerp(w, randomRange(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRange(-1, 1), range);
}
