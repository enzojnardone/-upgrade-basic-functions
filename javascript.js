console.log("JS Functions");

// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  };
};

console.log(sum(23838083, 23383038));

// **Iteración #2: Buscar la palabra más larga**

// // Completa la función que tomando un array de strings como argumento devuelva el más largo, 
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// // Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(object) {
  let longestWord = "";
  let word = "";
  for (const iterator of object) {
    if (iterator.length > word) {
      word = iterator.length;
      longestWord = iterator;
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));

// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

// Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(object) {
  let sum = 0;
  for (let i of object) {
    sum += i;
  }
  return sum;
}

console.log(sumAll(numbers));

// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

// function average(element) {
//   let i = 0;
//   for (const iterator of element) {
//       i += iterator;
//     }
//     let media = i / element.length;
//     return media;
// };

// Otra formna de hacer el promedio

function average(element) {
  let i = 0;
  let sum = 0;
  let arrayLen = element.length;

  while (i < arrayLen) {
    sum = sum + element[i++];
  }
  return sum / arrayLen;
}

console.log(`El promedio obtenido es ${average(numbers2)}`);

// **Iteración #5: Calcular promedio de strings**

// // Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 
// Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let listNumber = 0;
let iterarString = "";
function averageWord(element) {
  for (let item of element) {
    if (typeof item === 'number') {
      listNumber += item;
    }
    if(typeof item === 'string') {
      listNumber += item.length;
    };
  };
  return listNumber;
};

console.log(averageWord(mixedElements));

// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

console.log(duplicates);

// Con forEach

function removeDuplicates(array) {
  const result = [];
  array.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
}

console.log(removeDuplicates(duplicates));

// Con forof

// function removeDuplicates (array) {
//   let resultArray = [];
//   for (const item of array) {
//     if (!resultArray.includes(item)) {
//       resultArray.push(item);
//     };
//   };
//   return resultArray;
// };

// console.log(removeDuplicates(duplicates));

// **Iteración #7: Buscador de nombres**

// // Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array -
// comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
// Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

console.log(nameFinder);

function finderName(element, name) {
  for (let iterator of element) {
    if (iterator === name) {
      return `${true}; la persona se encuentra en la posición ${element.indexOf(
        name
      )}`;
    }
  }
  return `${false}; la persona no existe`;
}

console.log(finderName(nameFinder, "Natasha"));

// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

// function repeatCounter(element) {
//   counterWords.sort();

//   let word = 0;
//   let counter = 0;
//   for (let i = 0; i < element.length; i++) {
//     if (element[i] != word) {
//       if (counter > 0) {
//         console.log(`La palabra ${word} se repite ${counter} veces`);
//       };
//       word = element[i];
//       counter = 1;
//     }else {
//       counter++;
//     };
//   };
// };
// repeatCounter(counterWords);

function repeatCounter(element) {
  const counter = {};
  for (let i of element) {
    if (counter[i]) {
      counter[i] += 1;
    } else {
      counter[i] = 1;
    }
  }
  console.log(counter);
}

repeatCounter(counterWords);