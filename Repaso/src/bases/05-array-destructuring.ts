const characterNames = ['Juan', 'Diego', 'Tatiana'];

const [ p1, p2, p3 ] = characterNames;
console.log({p1, p2, p3});


/* para sacar un personaje que no este en orden */
const [ , ,trunks ] = characterNames
console.log({ trunks });

/* valores de funciones */
const returArraysFn = () => {
    return ['ABC', 123] as const // SIEMPRE en un array con 2 objetos, SIEMPRE la primera es string
} // as const convierte el array en solo lectura y el primer elemento siempre es string, el segundo numbers

const [ letras, numeros ] = returArraysFn();
console.log(letras, numeros);



// TAREA DESTRUCTURING
/* crear funcion llamada useState, debe retornar un arreglo con dos elementos
#1 un string
#2 una funcion anonima de flecha que:
    recibe string
    imprime ese string en consola

ejemplo uso esperado

const [ name, setName ] = useState ( 'Goku' );
console.log(name);
setName( 'Vegeta')
*/

const useState = (value: string) => {
    return [
        value, 
        (name: string) =>{
        console.log(name);
    }, 
  ] as const;
};

const [ value, name ] = useState ( 'Goku' );
console.log(value);
name( 'Vegeta');