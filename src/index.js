import createItem from './services/item.js'
import * as cartService from './services/cart.js'

const cart = []
const mywishilist = []

const item1 = await createItem("bolo",10,1);

const item2 = await createItem ("Lamborgine",3,3);


await cartService.addItem(cart,item1)
await cartService.addItem(cart,item2)
await cartService.deleteItem(cart,item2.name)
//await cartService.removeItem(cart,1)
await cartService.displayCart(cart);


console.log("TOTAL É 🛒");

await cartService.CalcularTotal(cart);

