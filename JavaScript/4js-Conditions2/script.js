 let time = new Date().getHours()

 console.log(`Agora são ${time} horas`)

 if (time < 13 && time > 5)
     {console.log('Bom dia')}
 else if (time < 18)
     {console.log('Boa tarde')}
 else
     {console.log('Boa noite')}

let date = new Date().getDay()

switch (date) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log('Ocorreu um erro inesperado')
}