// const bill=function(products,tax){
//     let total=0;
//     for(let i=0;i<products.length;i++){
//         total+= products[i] + products[i] * tax;
//     }
//     return total;
    
// }
// console.log(bill([10,15,30],0.2));
//You cant do much but you can still write
const bill=(products,tax)=>{
    let total=0;
    for(let i=0;i<products.length;i++){
        total+= products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30],0.2));