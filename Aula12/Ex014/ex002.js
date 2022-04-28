var agora = new Date()
var minute = new Date()
var hora = agora.getHours()
var minuto = minute.getMinutes()
console.log(`Agora sao exatamente ${hora}:${minuto}`)
if (hora >= 0 && hora < 12){
    console.log('Bom dia!')
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}
