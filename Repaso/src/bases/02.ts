//Arrays

const array: (number|string)[] = [1,2,3,4,5 ];
console.log(array)
array.push(6);
array.push('10');

for (const miArray of array ) {
    console.log(miArray);
}

const array2 = structuredClone(array);
array2.push(7);
console.log({array2, array});