console.log("JS Functions");

// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

console.log(sum(23838083, 23383038));

// **Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord() {
  let LongestWord = "0";
  for (let i = 0; i < avengers.length; i++) {
    LongestWord = i;
  }
  return LongestWord;
}

console.log(findLongestWord(avengers));

// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

// Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll() {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumAll(numbers));

// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

// function average() {
//   let i = 0;
//   for (const number of numbers2) {
//       i += number;
//     }
//     let media = i / numbers2.length;
//     return media;
// };

// Otra formna de hacer el promedio

function average() {
    let i = 0;
    let sum = 0;
    let arrayLen = numbers2.length;

    while (i < arrayLen) {
        sum = sum + numbers2[i++];
    };
    return sum / arrayLen;
};

console.log(`El promedio obtenido es ${average(numbers2)}`);

// **Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
// function averageWord(param) {
//   // insert code
// }

// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
];

function removeDuplicates() {
    const result = [];

    duplicates.forEach((item)=>{
        if(!result.includes(item)){
    		result.push(item);
    	};
    });  
    return result
};

console.log(removeDuplicates(duplicates))