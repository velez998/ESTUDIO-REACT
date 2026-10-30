const nombre: string = "Juan Diego";
let edad = 9;

console.log(nombre, edad)
const contieneLetra = nombre.includes('J');
console.log(contieneLetra);

/* Template String `` */
console.log(`El nombre es ${nombre} y tiene ${edad} años`)

// Interface -- definir tipo de dato de cada atributo
interface Person{
    nombre: string;
    apellido: string;
    edad: number;
    direccion: Address;
}

interface Address {
    ciudad?: string;
    calle?: string;
    numero?: string;
}


/* Objetos */
const persona: Person = {
    nombre: 'Juan',
    apellido: 'Velez',
    edad: 28,
    direccion: {
        ciudad: 'Cali',
        calle: '15',
        numero: '63-01'
    }
}

console.log(persona)

const persona2 = structuredClone(persona);
persona2.nombre = 'Juan Diego';
persona2.apellido = 'Velez';

console.log(persona2)


