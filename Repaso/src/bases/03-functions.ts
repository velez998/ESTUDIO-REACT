//Funciones

function saludo (name: string):string {
    return `Hola ${name}`
};
saludo('Juan');

const mensaje = saludo('Juan Diego');
console.log(mensaje);

//Funcion flecha
const saludo2 = (name:string):string => {
    return `Hola ${name}`
};

const mensaje2 = saludo2('Juan Velez');
console.log(mensaje2);

//Funcion tradicional

function getUser(){
    return {
        uid: 'NCC-60F',
        username: 'velz98',
    }
}

const user = getUser;


const getUser2 = () => {
    return {
        uid: 'NCC-60F',
        username: 'juanvlz998',
    }
}

const user2 = getUser2;
console.log(user, user2);


//Funcion flecha tradicional con parametro multiple
const getUser3 = (uid:string, username:string) =>{
    return {
        uid: uid,
        username: username,
    }
}

const user3 = getUser3('NCC-60F', 'velz98');
console.log(user3);


//Funcion parametro multiple con interface
interface User {
    uid: string,
    username: string
}
function user4():User {
    return  {
        uid: 'NCC-60F',
        username: 'Juan',
    }
}
const user5 = ():User => ({
        uid: 'NCC60F',
        username: 'Juan',
})
 
const consola1 = user4;
const consola2 = user5;
console.log(consola1, consola2);


//Funcion flecha simplificada
const saludo3 = (name: string) => `Hola ${name}`

const mensaje3 = saludo3('Juan');
console.log(mensaje3);


//ForEach de un array
const myNumbers: number[] = [1,2,3,4,5]

myNumbers.forEach(function (valor) {
    console.log({valor});
});

//forma simplificada
myNumbers.forEach((valor) => {
    console.log(valor);
});

//aun mas simplificado
myNumbers.forEach(console.log);