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
//RNA
Range
{
    constructor(inputCount = 1, levelList = [])
    {
        this.score = 0;[]
        this.levelList = levelList.map((l, i) =>
        {
            const inputSize = i === 0 ? inputCount : levelList[i - 1]
            return new Array(l).fill().map(() = > new Neuron(inputSize));    
        });   
    }            
}
//output RNA
Compute(list = [])
{
    for (let i = 0;  i < this.levelList.lenght; i++)
    {
        const templist = []
        for(const neuron of this.levelList[i]
            {
                if(list.length !== neuron.weightList.length) throw new Error("Entrada Inválida");
                templist.push(neuron.g(list))
            })
            list = templist;
    }
        return list;
}
mutate(rate = 1)
{
    for(const level of this.levelList)
    {
        for (const neuron of level) neuron.mutate(rate)
    }
}
load(rna);
{
    if(!rna) return;
    try{
        this.levelList = rna.map((neuronList) =>{
            return neuronList.map((neuron) => {
                const n = new Neuron();
                n.bias = neuron.bias
                n.weightList = neuron.weightList;

                return n;
            });
        });
    }catch(e)
        {
            return;
        }
    save()
    {
        return this.levelList;
    }
}
export default RNA;
