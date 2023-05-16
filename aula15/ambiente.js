let num = [5,8,2,9,3]
num.push(7)
console.log(`O vetor ordenado em ordem crescente fica ${num.sort()}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let val = 4
let pos = num.indexOf(val)
if (pos == -1) {
    console.log(`O valor ${val} não foi encontrado!`)
} else {
    console.log(`O valor ${val} está na posição ${pos}`)
}
