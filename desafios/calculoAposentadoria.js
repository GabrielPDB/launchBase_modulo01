const nome = 'Sivana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

if (sexo === 'F') {
    if (contribuicao >= 30 && contribuicao + idade >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }

} else if (sexo === 'M') {
    if (contribuicao >= 30 && contribuicao + idade >= 95) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
} else {
    console.log('Algo de errado não está certo!')
}