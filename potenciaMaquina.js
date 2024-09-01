let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 70, 60, 25, 10, 50, 40, 90, 10, 2]

let maior = 0
let menor = 0

for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
        maior = array[i]
    }
    else{
        menor = array[i]
    }
}

console.log(`O maior número registrado foi: ${maior}`)
console.log(`O menor número registrado foi: ${menor}`)
