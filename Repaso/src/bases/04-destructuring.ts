const person ={
    name: 'Juan',
    age: 28,
    key: '1234'
}

const { name: miNombre, age, key } = person;

console.log(person.name, person.age)
console.log({miNombre, age, key});

interface Objeto {
    name: string,
    age: number;
    key: string;
    rank?: string;
}
/*
const useContext = ( {key, name, age, rank}: Objeto ) => {
    return {
        keyname: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const context = useContext(person);
console.log(context)
*/
// otra forma de hacerlo
   
const useContext = ( person: Objeto ) => {
    const {key, name, age, rank = 'sin rango'} = person;

    return {
        keyname: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const {
    rank, 
    keyname, 
    user,
} = useContext(person);

const {name} = user;

console.log(rank, keyname, name);



