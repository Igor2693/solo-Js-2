'use strict'

// Функцианал калькулятора

// const a = document.getElementById('a')
// const b = document.getElementById('b')
// const sum = document.getElementById('sum')
// const mult = document.getElementById('mult')
// const res = document.getElementById('res')

// const calculator = {
//     sumCount: 0,
//     multCount: 0,
//     sum: () => {
//         this.sumCount = 0
//         this.multCount = 0

//         const first = +a.value
//         const second = +b.value
//         this.sumCount = first + second
//         console.log(this.sumCount);

//         calculator.show()

//     },
//     mult: () => {
//         this.sumCount = 0
//         this.multCount = 0
//         const first = +a.value
//         const second = +b.value
//         this.multCount = first * second
//         console.log(this.multCount);

//         calculator.show()

//     },
//     show: () => {
//         if (this.sumCount !== 0) {
//             res.value = this.sumCount
//         } else if (this.multCount !== 0) {
//             res.value = this.multCount
//         } else if (this.sumCount == 0 && this.multCount == 0) {
//             res.value = 0
//         }
//     },

// }

// sum.addEventListener('click', calculator.sum)
// mult.addEventListener('click', calculator.mult)

// Выполнение задания с функцией расчета

// function getResult(x, y) {
//     let result;
//     result = x ** y
//     let sum = String(result)
//     result = 0
//     for (let i of sum) {
//         result += +i
//     }
//     return result
// }

// console.log(getResult(4, 8))

// Выполнение 3 задания

const select = document.getElementById('country')
const city = document.getElementById('city')
let resBlock = document.querySelector('.result')
console.log(resBlock);


const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

let newArr = []

const choose = function () {
    newArr = []
    const value = select.value
    console.log(value);
    city.style.display = 'inline-block'
    if (value === 'bel') {
        cityArr.bel.forEach(function (item) {

            newArr.push(item)
            console.log(newArr);


        });
    } else if (value === 'rus') {
        cityArr.rus.forEach(function (item) {

            newArr.push(item)
            console.log(newArr);

        });
    } else if (value === 'uk') {
        cityArr.uk.forEach(function (item) {

            newArr.push(item)
            console.log(newArr);

        });
    } else if (value === 'jap') {
        cityArr.jap.forEach(function (item) {

            newArr.push(item)
            console.log(newArr);

        });
    }

    city.innerHTML = ''
    newArr.forEach(function (item) {
        const newElem = document.createElement('option')
        newElem.innerText = item
        city.append(newElem)
    })
}

country.addEventListener('change', choose)
city.addEventListener('change', () => {
    resBlock.innerHTML = ''
    const stringResult = document.createElement('p')
    stringResult.textContent = select.options[select.selectedIndex].textContent + ' ' + city.value
    resBlock.append(stringResult)

})


