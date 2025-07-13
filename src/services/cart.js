// adicionar item
// deletar item
// remover item
//  calcular total

// 👍
async function addItem(userCart,item){
    
    userCart.push(item)

}
async function deleteItem(userCart,nome){
const indexfound = userCart.findIndex((item)=> item.name === nome);
console.log(indexfound);
if(indexfound!== -1){
    //deleta item
    //userCart.splice(indexfound,1)
    console.log("item não encontrado");
    return;
}

// se item maior que 1 subtrai 

if(userCart[indexfound].qtd > 1){
    userCart[indexfound].qtd--
}

}

async function displayCart(userCart) {
    console.log("Shopee cart list: ")
    userCart.forEach((item,index) => {
        console.log(`${index+1}`);
        console.log(`${item.name} - R$ ${item.price} x ${item.qtd} = R$ ${item.subtotal()}`);
    });
}

async function removeItem(userCart,index){
    //transforma o campo do usuario em index do backend
    const deletIndex = -1;
    if(index  >=0 && index < userCart.length){
        userCart.splice(deletIndex,1)
    }
}

async function CalcularTotal(userCart){
    const result = userCart.reduce((total,item)=>
        total + item.subtotal() , 0)

    console.log(result);
    

}

export {
    addItem,
    CalcularTotal,
    removeItem,
    deleteItem,
    displayCart
}

