const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else if (transaction.type === 'debit') {
        user.balance -= transaction.value
    } else {
        console.log('Transaction denied')
    }

    user.transactions.push(transaction)
}

function getHigherTransactionByType(typeOfTransaction) {
    let higherValue = 0
    let higherTransaction

    for (transaction of user.transactions) {
        if (transaction.type === typeOfTransaction && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for (transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let countOfTransactionsType = {
        credit: 0,
        debit: 0
    }

    for (transaction of user.transactions) {
        if (transaction.type === 'credit') {
            countOfTransactionsType.credit++
        } else {
            countOfTransactionsType.debit++
        }
    }

    return countOfTransactionsType
}

// Final project results example

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }