const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: [
            'HTML',
            'CSS'
        ]
    },
    {
        nome: 'Jasmine',
        tecnologias: [
            'Javascript',
            'CSS'
        ]
    },
    {
        nome: 'Tuane',
        tecnologias: [
            'HTML',
            'Node.js'
        ]
    },
    {
        nome: 'Gabriel',
        tecnologias: [
            'HTML',
            'Javascript',
            'Node.js',
            'CSS'
        ]
    }
]

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias){
        if (tecnologia == 'CSS'){
            return true
        }
    }
    return false
}

for (let usuario of usuarios) {
    if (checaSeUsuarioUsaCSS(usuario)) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`)
    }
}