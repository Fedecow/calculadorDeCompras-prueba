let productoSeleccionado = parseInt(
    prompt(
        'Bienvendidos a Musimundo! Escoge el producto que deseas comprar: 1.iPhone - 2.TV - 3.Ipad - 4.Computador'
    )
)
let seguirComprando = true
let totalCompra = 0
let decision
//arreglo de productos
const productosArray = []
//clase producto
class NewProduct{
    constructor(id,name,price,stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
const iphone = new NewProduct(1,'iPhone', 600, 20);
productosArray.push(iphone);
const tv = new NewProduct(2,'tv', 1000, 40);
productosArray.push(tv);
const ipad = new NewProduct(3, 'iPad', 200, 30);
productosArray.push(ipad);
const computador = new NewProduct(4, 'computador', 800, 15);
productosArray.push(computador);
console.log(productosArray)

while (seguirComprando === true) {
    const producto = productosArray.find(prod=>prod.id === productoSeleccionado)
    totalCompra = totalCompra + producto.price

    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt('Escoge el producto que deseas comprar: 1.iPhone - 2.TV - 3.Ipad - 4.Computador'))
    }else {
        seguirComprando = false
    }
}

const totalCompraConDescuento = descuento(totalCompra)
alert(`El total de tu compra es ${totalCompraConDescuento}`)

function descuento(valor) {
    let descuento = 0
    if (valor <= 1000) {
        descuento = 10
    }else if (valor > 1000 && valor <= 2000) {
        descuento = 15
    }else {
        descuento = 20
    }

    let valorDescuento = valor * (descuento / 100)
    let valorFinal = valor - valorDescuento
    return valorFinal
}