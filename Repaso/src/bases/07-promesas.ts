//promesa de devolver dinero
const myPromise = new Promise <number>( (resolve, reject) => {

    /*
    setTimeout(() => {
        resolve(100); // si regreso el dinero (100 dolares) en 2 segundos
    }, 2000); // 2 segundos
    */
    setTimeout(() => {
        reject('Mi amigo me robo'); 
    }, 2000); 

})

//se usa cuando si tenemos el dinero
myPromise.then((myMoney) => {       
    console.log(`Tengo mi dinero: ${myMoney}`)
    
})
.catch((reason) =>{
    console.log(reason)
})
.finally(() =>{
    console.log('Sigo con mi vida');
})