var idade = 73
console.log(`Voce tem ${idade} anos!`)
if (idade < 16) {
    console.log('Proibido de votar')
}
else if (idade < 18) {
        console.log('Voto opcional')
    }
else if (idade >= 67) {
        console.log('Voto opcional')
    }
    else { 
        console.log('Voto Obrigatorio')
    }
