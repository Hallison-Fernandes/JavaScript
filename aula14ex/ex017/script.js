function gerar() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#tabela')

    alert = Number(num.value)

    if (Number(num.length) === 0) {
        alert = '[ERRO] Digite um número'
    }
}