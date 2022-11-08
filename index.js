
alert('bienvenido a musimundo, seleccione el producto que desee')
const productArray = []

class NewProduct {
    constructor(id, name, price, stock) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock 
    }
}
const iphone = new NewProduct(1, 'iphone', 600, 20)
productArray.push(iphone)
const tv = new NewProduct(2, 'TV', 1000, 40)
productArray.push(tv)
const ipad = new NewProduct(3, 'ipad', 200, 30)
productArray.push(ipad)
const computador = new NewProduct(4, 'computador', 800, 15)
productArray.push(computador)
const selectProd = document.getElementById('lista')
console.log(productArray)

productArray.forEach(elemento=>{
    const optionProd = document.createElement('option')
    optionProd.innerText = `${elemento.name}: ${elemento.price}`
    optionProd.setAttribute('id',`${elemento.id}`)
    selectProd.append(optionProd)
})