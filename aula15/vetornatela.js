let valores = [8,1,7,4,2,9]
/*
for (let c = 0; c < valores.length; c++) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
*/
valores.sort()
for(let c in valores){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}

