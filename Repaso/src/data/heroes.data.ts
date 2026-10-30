

export interface Hero{
    id: number;
    name: string;
    owner: Owner;   //Es el type Owner definido abajo
}
export type Owner = 'DC' | 'Marvel';  //Definimos unicamente 2 valores en este campo
/* 
enum Owner{
    DC = 'DC', // 0 // DC
    Marvel = 'Marvel' // 1 // Marvel
} 
    permite llenar el campo owner como Owner.DC o Owner.Marvel
*/

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];

console.log(heroes);