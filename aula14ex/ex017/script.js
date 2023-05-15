function gerar() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#tabela')
    //alert(Number(num.value))

    if (num.value.length == 0) {
        alert('[ERRO] Digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let r = 1; r <= 10; r++) {
            let item = document.createElement('option')
            item.text = `${n} x ${r} = ${n*r}`
            item.value = `tab${r}`
            tab.appendChild(item)
            
        }
    }
}