'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.addElement = function () {
    if (this.selector.startsWith('.')) {
        const div = document.createElement('div')
        div.classList = 'block'
        div.textContent = 'Это блок'
        div.style.cssText = `
        width: ${this.width}px;
        height: ${this.height}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        `
        document.body.append(div)
        console.log(div);
    } else if (this.selector.startsWith('#')) {
        const p = document.createElement('p')
        p.setAttribute('id', 'paragraph')
        p.textContent = 'Это параграф'
        p.style.cssText = `
        width: ${this.width}px;
        height: ${this.height}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        `
        document.body.append(p)
        console.log(p);
    }
}

const block = new DomElement('.block', 100, 100, 'green', 15)
const paragraph = new DomElement('#p', 150, 500, 'yellow', 20)
block.addElement()
paragraph.addElement()

console.log(block);
console.log(paragraph);

