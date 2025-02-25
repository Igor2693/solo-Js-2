'use strict'

const DomElement = function () {

    this.selector = ''
    this.height = 0
    this.widht = 0
    this.bg = 'green'
    this.fontSize = 24

    this.addElem = function () {
        if (this.selector.startsWith('.')) {
            const div = document.createElement('div')
            div.classList.add('block')
            div.innerText = 'Текст блока'
            div.style.cssText = 'height: 200px; width: 200px; font-size: 32px; background-color: green;'
            document.body.append(div)
            // div.innerText = prompt('Введите текс блока')
            console.log(div);
            console.dir(div);
        }
        if (this.selector.startsWith('#')) {
            const p = document.createElement('p')
            p.setAttribute('id', 'best')
            p.innerText = 'Текст параграфа'
            p.style.cssText = ' font-size: 32px; height: 200px; width: 200px; background-color: blue;'
            document.body.append(p)
            // p.innerText = prompt('Введите текст параграфа')
            console.log(p);
            console.dir(p);
        }


    }
}

const newObj = new DomElement

newObj.selector = prompt('Введите название', '.block или #block')
newObj.addElem()

console.log(newObj);
