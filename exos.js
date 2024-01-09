//----------------------------------------------------------------------------------------------//
// EXERCICE 1
// Crée une fonction qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6 => 6 * 2 = 12

function multiplication(a, b) {
  return a * b * 2;
}
const num1 = 2;
const num2 = 5;
console.log(multiplication(num1, num2));

// CODE ICI

//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Crée une fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1

// CODE ICI
function firstElement(someArray) {
  return someArray[0];
}
const array2 = [1, 2, 3, 4];
console.log(firstElement(array2));
//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]

// CODE ICI
function lastElemeDelete(someArray) {
  someArray.pop();
  return someArray;
}
const array3 = [1, 2, 3, 4, 50];
console.log(lastElemeDelete(array3));

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Crée une fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6

// CODE ICI
const sumFunction = (someArray) => {
  let sum = 0;
  for (i = 0; i < someArray.length; i++) {
    sum = sum + someArray[i];
  }
  return sum;
};
const array4 = [1, 2, 3, 44];
console.log(sumFunction(array4));
//----------------------------------------------------------------------------------------------//

// EXERCICE 5
//Crée une fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"

const reverseString = (someString) => {
  const newArray = someString.split("");
  newArray.reverse();
  let newString = newArray.join("");
  return newString;
};

const string5 = "Hello";
console.log(reverseString(string5));

//----------------------------------------------------------------------------------------------//

// EXERCICE 6
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3

// CODE ICI
// const maxElement = (someArray) => {
//   someArray.sort((a, b) => {
//     return a - b;
//   });
//   return someArray[someArray.length - 1];
// };
// const array6 = [1, 5, 10, 0, 2, 85];
// console.log(maxElement(array6));
const maxElement = (someArray) => {
  const maxNum = Math.max(...someArray);
  return maxNum;
};
const array6 = [1, 5, 10, 0, 2, 85];
console.log(maxElement(array6));
//----------------------------------------------------------------------------------------------//

// EXERCICE 7
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1

// CODE ICI
const minElement = (someArray) => {
  const minNum = Math.min(...someArray);
  return minNum;
};
const array7 = [1, 2, 3, 4];
console.log(minElement(array7));
//----------------------------------------------------------------------------------------------//

// EXERCICE 8

// Crée une fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"

// CODE ICI
const noVowel = (string8) => {
  let newArray = string8.split("");
  newArray = newArray.filter((letter) => {
    return letter !== "e" && letter !== "o";
  });
  return newArray.join("");
};
const string8 = "Hello";
console.log(noVowel(string8));
//----------------------------------------------------------------------------------------------//

// EXERCICE 9

// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]

// CODE ICI
const sortFunction = (someArray) => {
  const newArray = someArray.sort((a, b) => {
    return a - b;
  });
  return newArray;
};
const array9 = [1, 5, 8, 4];
console.log(sortFunction(array9));
//----------------------------------------------------------------------------------------------//

// EXERCICE 10

// Crée une fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

// CODE ICI
const letterRotation = (string10) => {
  let newArray = [];
  for (i = 0; i < string10.length; i++) {
    const newString = string10.substring(i) + string10.substring(0, i);
    newArray.push(newString);
  }
  return newArray;
};
const string10 = "Hello";
console.log(letterRotation(string10));
//----------------------------------------------------------------------------------------------//

// EXERCICE 11

// Crée une fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]

// CODE ICI
const arrayAdd = (someArray) => {
  const newArray = someArray.map((element) => {
    return (element = element + 1);
  });
  return newArray;
};
const array11 = [1, 2, 3];
console.log(arrayAdd(array11));
//----------------------------------------------------------------------------------------------//

// EXERCICE 12

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]

// CODE ICI
const arrayLength = (someArray) => {
  const newArray = array12.map((element) => {
    return element.length;
  });
  return newArray;
};
const array12 = ["Hello", "World"];
console.log(arrayLength(array12));
//----------------------------------------------------------------------------------------------//

// EXERCICE 13

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]

// CODE ICI
const firstLetter = (someArray) => {
  const newArray = someArray.map((element) => {
    return element[0];
  });
  return newArray;
};

const array13 = ["Hello", "World"];
console.log(firstLetter(array13));
//----------------------------------------------------------------------------------------------//

// EXERCICE 14

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 15

// Crée une fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 16

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner la somme de tout les nombres du tableau.
// Exemple : [1, 2, 3] => 6

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 17

// Crée une fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 18

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les string qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"]

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 19

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner tout les nombres qui sont pairs par ordre croissant.
// Exemple : [ 2, 9, 6, 5, 6] => [2, 6, 6]

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 20

// Vous avez réussi à passer le premier niveau des algos, bravo ! Maintenant on va passer au niveau 2.

// Crée une fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.
// Exemple :
// findShort("Prachett is the best author in the world ") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 21

//Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre.
//Deux chaînes sont des anagrammes l'une de l'autre si elles contiennent les caractères, quel que soit l'ordre des caractères.
//Par exemple, "listen" et "silent" sont des anagrammes l'une de l'autre

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 22

//Ecrivez une fonction qui enlève les doubles lettres d'une chaîne donnée. Par exemple, "google" deviendrait "gogle"
// Par exemple :
// removeDoubleLetters("google") // "gogle"
// removeDoubleLetters("Hello World!") // "Helo World!"

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 23

//Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme
// d'un numéro de téléphone.
// Exemple :
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) // "(123) 456-7890"

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 24

//Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres
//(en tant que chaînes de caractères) et qui renvoie la lettre manquante de la série. Si aucune lettre n'est manquante,
//la fonction doit renvoyer "undefined".
// Exemple :
// findMissingLetter(["a","b","c","d","f"]) // "e"
// findMissingLetter(["O","Q","R","S"]) // "P"

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 25

//Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple :
// sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]
// sortString(["lait", "beurre", "fromage", "yaourt"]) // ["beurre", "fromage", "lait", "yaourt"]

// CODE ICI
