let num = document.querySelector('input#num')
let lista = document.querySelector('select#sel')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}    

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = menor[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML +=`<p>Ao todo, temos <strong>${tot} números</strong> cadastrados.</p>`
        res.innerHTML += `<p>O <strong>maior valor</strong> informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O <strong>menor valor</strong> informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando <strong>todos os valores</strong>, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}