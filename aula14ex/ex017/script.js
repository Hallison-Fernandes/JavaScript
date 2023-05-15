function gerar() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('div#tabela')
    //alert(Number(num.value))

    if (Number(num.value.length) === 0) {
        alert('[ERRO] Digite um número')
    } else {
        for (let r = 1; r <= 10; r++) {
            tab.innerHTML += `${Number(num.value) } X ${r} = ${Number(num.value) * r} <br>`
        }
    }
}