# Introdução ao Javascript

## Variáveis

* `const` - É uma constante, ou seja, seu valor não muda com o decorrer da execução do programa.
* `let` - É uma variável de fato, ou seja, seu valor pode mudar com o decorrer da execução do programa.

### Tipos de dados

#### String

* `const nome = 'Gabriel'` - Declara uma **String** com valor *Gabriel*.
* `const nome = "Gabriel"` - Declara uma **String** com valor *Gabriel*.
```
const nome = `Gabriel` 
``` 
- Declara uma **Template String** com valor *Gabriel*. Esse tipo de dado permite a utilização de outras variáveis em seu interior.
    * `${<nome da variável>}` - Essa sintaxe é utilizada dentro da **Template String** para referenciar a variável que será exibida.

#### Number

* `const numero = 20` - Declara um **Number** com valor *20*.

## Console.log

* O `console.log` exibe no terminal do **VSCode** ou no terminal do **Google Chrome** aquilo que for desejado.
    * `typeof(<nome da variável>)` - Exibe o tipo de dado daquela variável.


## Operadores 

### Comparativos

* **>** - Maior
* **<**   - Menor
* **>=**  - Maior ou igual a
* **<=**  - Menor ou igual a
* **==**  - Igual a
* **===** - Igual e do mesmo tipo
* **!=**  - Diferente de
* **!==** - Diferente, inclusive do tipo

### Lógicos

* **&&** - "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira
* **||** - "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira
* **!** - "NÃO" Nega uma condição

### Aritméticos

* "*" - Multiplicação
* **/** - Divisão
* **%** - Resto da divisão
* **+** - Adição
* **-** - Subtração

## Objetos

* É uma coleção de propriedades que recebem valores ou funcionalidades
```
const <nome do objeto> = {
    <propriedade>: <valor da propriedade>,
    <propriedade>: <valor da propriedade>
}
```
* Para acessar as propriedades de um objeto em qualquer lugar do código basta seguir o exemplo: `<nome do objeto>.<nome da propriedade>`.
* Ainda é possível criar objetos intercalados, por exemplo:
```
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}
```

## Arrays ou vetores

* É uma variável que contém diversos valores dentro dela.

```
const <nome do array> = [
    {
        <propriedade>: <valor da propriedade>,
        <propriedade>: <valor da propriedade>
    },
    {
        <propriedade>: <valor da propriedade>,
        <propriedade>: <valor da propriedade>
    }
    // Nesse caso, trata-se de um array de objetos.
]
```

* Para acessar os valores de um array em qualquer lugar do código, basta informar a posição desejada dentro dele, lembrando que essa posição inicia sempre no Zero: `<nome do array>[<posicao do valor>]`. Ex:
```
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
```

* Também é possível criar arrays dentro de objetos, conforme o exemplo:
```
const programador = {
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        }
    ]
}
```
Neste caso temos um objeto que armazena dados de um programador: `const programador = {}`. 


&nbsp;

`nome`, `idade` e `tecnologias` são propriedades desse objeto `programador`. Mas `tecnologias` é um **Array** de um ou mais objetos que contém outras propriedades, como `nome` e `especialidade`.

## Funções

* São usadas para reaproveitar códigos que precisam ser executados mais de uma vez e ainda para separar determinadas execuções do programa.
* Sua sintaxe é a seguinte:
```
function <nome da funcao>(<parametros da funcao separados por virgulas>) {
    <bloco de codigo que sera executado>
    return // Se for necessario retornar algo diretamente para o local onde a funcao foi chamada
}
```

* Para "chamar" uma função, basta seguir o exemplo:
```
<nome da funcao>(<parametros>)
```
* Lembrando que uma função não precisa necessariamente de parâmetros e, caso a função não os possua, não é necessário informa-los na hora de chamar a função.

## Estruturas de repetição

### For

* Serve para executar um determinado bloco de código várias vezes quando previamente já se sabe quantas vezes será executado, seja esse conhecimento vindo de quem escreveu o código ou de uma variável, ou até mesmo de um array ou objeto.
* Estrutura:
```
for (<variavel de controle>; <condicao de repeticao; incremento){
        <bloco de codigo>
    }
```
* Exemplo:
```
for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
```
* Há ainda outros modos de utilizar um **For**, chamados de **for..in** e **for..of**

#### For..in

```
for (let <chave> in <array>){
    <bloco de código>
}
```
* Esse modo itera a respeito da **chave** de cada propriedade do **array**.

#### For..of

```
for (let <valor> of <array>){
    <bloco de código>
}
```
* Esse modo itera a respeito do **valor** de cada propriedade do **array**.


##### Exemplo de For..in e For..of
```
let arr = ['propriedade1', 'propriedade2', 'propriedade3'];

arr.addedProp = 'outraPropriedade';

// aChave é a chave das propriedades
for (let aChave in arr) {
  console.log(aChave);
}

// Saída
// 0
// 1
// 2
// outraPropriedade

// oValor é o valor das propriedades
for (let oValor of arr) {
  console.log(oValor)
}

// Saída
// propriedade1
// propriedade2
// propriedade3
```
