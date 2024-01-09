//----------------------------------------------------------------------------------------------//
// EXERCICE 1
// Crée une fonction qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6 => 6 * 2 = 12

// Pour rappel pour écrire une fonction en JS on utilise la syntaxe suivante :

// const nomDeMaFonction = (paramètre) => {
//   // Code de ma fonction
// }
// console.log(nomDeMaFonction(On remplace le paramètre par ce qu'on désire)) //

// CODE ICI
const calc = (a, b) => {
  return a * b * 2;
};

console.log(`Exo 1 : ${calc(2, 3)}`);
//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Crée une fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1
// Pour rappel pour accéder à un élément d'un tableau on utilise la méthode [laplaceDuNombreDeL'élément] :
// const monTableau = [1, 2, 3]
// console.log(monTableau[0]) // 1

// CODE ICI
const firstArrayElement = (someArray) => {
  return someArray[0];
};

const myFirstArray = [1, 2, 3, 4, 5];
console.log(`Exo 2 : ${firstArrayElement(myFirstArray)}`);
//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]
// Pour rappel pour supprimer le dernier élément d'un tableau on utilise la méthode pop():
// const monTableau = [1, 2, 3]
// monTableau.pop()
// console.log(monTableau) // [1, 2]

// CODE ICI
const lastElementDelete = (someArray) => {
  return someArray.pop();
};
const mySecondArray = [1, 2, 3, 4, 5];
console.log(`Exo 3 : tableau avant appel de fonction : ${mySecondArray}`);
lastElementDelete(mySecondArray);
console.log(`Exo 3 : tableau après appel de fonction : ${mySecondArray}`);

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Crée une fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour rappel pour parcourir un tableau on utilise la méthode for :
// const monTableau = [1, 2, 3]
// for (let i = 0; i < monTableau.length; i++) {
//   console.log(monTableau[i]) // 1, 2, 3
// }

// CODE ICI
const arrayElementSum = (someArray) => {
  let sum = 0;
  for (let i = 0; i < someArray.length; i++) {
    sum = sum + someArray[i];
  }
  return sum;
};
const myThirdArray = [1, 2, 3, 4, 5];
console.log(`Exo 4 : ${arrayElementSum(myThirdArray)}`);
//----------------------------------------------------------------------------------------------//

// EXERCICE 5
//Crée une fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode reverse() qui permet d'inverser un tableau :
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauInverse = monTableau.reverse()
// console.log(monTableauInverse) // ["o", "l", "l", "e", "H"]
//Maintenant que la string est inversée il faut la remettre en string avec la méthode join().

// CODE ICI
const inversedString = (sentence) => {
  const myArray = sentence.split("");
  // console.log(myArray);
  const myInversedArray = myArray.reverse();
  // console.log(myInversedArray);
  const newString = myInversedArray.join("");
  return console.log(`Exo 5 : ${newString}`);
};
const myString = "Hello";
inversedString(myString);
//----------------------------------------------------------------------------------------------//

// EXERCICE 6
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3
// Pour cette exercice on va utiliser la méthode Math.max() qui permet de retourner le plus grand nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.max(...monTableau)) // 3

// CODE ICI
const biggestNumber = (someArray) => {
  console.log(`Exo 6 : ${Math.max(...someArray)}`);
};
const monArray = [1, 2, 3];
biggestNumber(monArray);
//----------------------------------------------------------------------------------------------//

// EXERCICE 7
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1
// Pour cette exercice on va utiliser la méthode Math.min() qui permet de retourner le plus petit nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.min(...monTableau)) // 1

// CODE ICI
const smallestNumber = (someArray) => {
  console.log(`Exo 7 : ${Math.min(...someArray)}`);
};
const monTableau = [1, 2, 3];
smallestNumber(monTableau);
//----------------------------------------------------------------------------------------------//

// EXERCICE 8

// Crée une fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode filter() qui permet de filtrer un tableau :
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauFiltre = monTableau.filter((element) => {
//   return element !== "e" && element !== "o"
// })

// CODE ICI
const newString = (someString) => {
  const transitionTable = someString.split("");
  // console.log(transitionTable);
  const myTransitionTableFilter = transitionTable.filter((element) => {
    return element !== "e" && element !== "o";
  });
  // console.log(myTransitionTableFilter)
  const transformedSentence = myTransitionTableFilter.join("");
  return console.log(`Exo 8 : ${transformedSentence}`);
};

const sentenceToTransform = "Hello";
newString(sentenceToTransform);
//----------------------------------------------------------------------------------------------//

// EXERCICE 9

// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]
// Pour cette exercice on va utiliser la méthode sort() qui permet de trier un tableau :
// const monTableau = [1, 3, 2]
// console.log(monTableau.sort()) // [1, 2, 3]

// CODE ICI
const sortArray = (someArray) => {
  someArray.sort((a, b) => a - b);
  return console.log(`Exo 9 : ${someArray}`);
};

let fourthArray = [5, 10, 8, 91, 1];
sortArray(fourthArray);

//----------------------------------------------------------------------------------------------//

// EXERCICE 10

// Crée une fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Pour cette exercice on va utiliser une boucle for et la méthode push() qui permet d'ajouter un élément à un tableau :
// const maString = "Hello"
// const monTableau = []
// for (let i = 0; i < maString.length; i++) {
//   const maStringRotate = maString.substring(i) + maString.substring(0, i)
//   monTableau.push(maStringRotate)
// }
// console.log(monTableau) // ["Hello", "elloH", "lloHe", "loHel", "oHell"]

// CODE ICI
const stringIntoArray = (someString) => {
  for (let i = 0; i < someString.length; i++) {
    const myStringRotation =
      someString.substring(i) + someString.substring(0, i);
    myNewTable.push(myStringRotation);
  }
  return console.log(`Exo 10 : ${myNewTable}`);
};

const myNewString = "Hello";
const myNewTable = [];

stringIntoArray(myNewString);

//----------------------------------------------------------------------------------------------//

// EXERCICE 11

// Crée une fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = [1, 2, 3]
// const monTableauAddition = monTableau.map((element) => {
//   return element + 1
// })

// CODE ICI
const elementAdding = (someArray) => {
  const myArrayToEdit = someArray.map((element) => {
    return element + 5;
  });
  return console.log(`Exo 11 : ${myArrayToEdit}`);
};

const myFifthArray = [2, 3, 4];
elementAdding(myFifthArray);
//----------------------------------------------------------------------------------------------//

// EXERCICE 12

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = ["Hello", "World"]
// const monTableauLongueur = monTableau.map((element) => {
//   return element.length
// })

// CODE ICI
const elementLength = (someArray) => {
  const myTableLength = someArray.map((element) => {
    return element.length;
  });
  return console.log(`Exo 12 : ${myTableLength}`);
};

const mySixthArray = ["Hello", "World", "Charlie", "Chocolate"];
elementLength(mySixthArray);

//----------------------------------------------------------------------------------------------//

// EXERCICE 13

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau.
// Et la méthode charAt() qui permet de récupérer un caractère à une position précise :
// const monTableau = ["Hello", "World"]
// const monTableauPremiereLettre = monTableau.map((element) => {
//   return element.charAt(0)
// })

// CODE ICI
const firstElementString = (someArray) => {
  const firstElementArray = someArray.map((element) => {
    return element.charAt(0);
  });
  return console.log(`Exo 13 : ${firstElementArray}`);
};

const mySeventhArray = ["Hello", "World"];
firstElementString(mySeventhArray);
//----------------------------------------------------------------------------------------------//

// EXERCICE 14

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]
// Indice regarde l'exercice 13, c'est exactement la même chose sauf qu'il faut récupérer la dernière lettre et non la première.

// CODE ICI
const myNewTable2 = (someArray) => {
  const myLastArrayElement = someArray.map((element) => {
    return element.charAt(element.length - 1);
  });
  return console.log("Exo 14 :" + myLastArrayElement);
};

const myEigthArray = ["Hello", "World"];
myNewTable2(myEigthArray);
//----------------------------------------------------------------------------------------------//

// EXERCICE 15

// Crée une fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la longueur de la string. Incice : la méthode length() permet de récupérer la longueur d'une string.

// CODE ICI
const longStringReturn = (someArray) => {
  const newArray = [];
  someArray.filter((element) => {
    if (element.length >= 5) {
      newArray.push(element);
    }
  });
  return console.log("Exo 15: " + newArray);
};
const myNinethArray = ["Hello", "World", "Test", "Salut", "Yo"];
longStringReturn(myNinethArray);
//----------------------------------------------------------------------------------------------//

// EXERCICE 16

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner la somme de tout les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour cette exercice on va utiliser la méthode reduce() qui permet de réduire un tableau en un seul élément :
// const monTableau = [1, 2, 3]
// const somme = monTableau.reduce((accumulateur, element) => {
//   return accumulateur + element
// }, 0)

// CODE ICI
const sumElementArray = (someArray) => {
  const somme = someArray.reduce((accumulateur, element) => {
    return accumulateur + element;
  });
  return console.log("Exo 16: " + somme);
};
const myTenthArray = [1, 2, 8, 9];
sumElementArray(myTenthArray);
//----------------------------------------------------------------------------------------------//

// EXERCICE 17

// Crée une fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]
// Pour cette exercice on va utiliser la méthode concat() qui permet de concaténer deux tableaux :
// const monTableau1 = ["Hello", "World"]
// const monTableau2 = ["Test", "Salut"]
// const monTableauConcat = monTableau1.concat(monTableau2)
// console.log(monTableauConcat) // ["Hello", "World", "Test", "Salut"]

// CODE ICI
const sumTwoArrays = (someArray1, someArray2) => {
  const myArrayConcat = someArray1.concat(someArray2);
  return console.log("Exo 17: " + myArrayConcat);
};
const monTableau1 = ["Hello", "World"];
const monTableau2 = ["Test", "Salut"];
sumTwoArrays(monTableau1, monTableau2);
//----------------------------------------------------------------------------------------------//

// EXERCICE 18

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les string qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la présence de la lettre "e". Indice : la méthode includes() permet de savoir si une string contient une lettre ou un mot.

// CODE ICI
const elementFilterArray = (someArray) => {
  const newArray = [];
  someArray.filter((element) => {
    if (element.includes("e")) {
      newArray.push(element);
    }
  });
  return console.log("Exo 18 : " + newArray);
};
const myArray18 = ["Poulet", "Chat", "Chien", "Cheval"];
elementFilterArray(myArray18);
//----------------------------------------------------------------------------------------------//

// EXERCICE 19

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner tout les nombres qui sont pairs par ordre croissant.
// Exemple : [ 2, 9, 6, 5, 6] => [2, 6, 6]
// Indice : il y a plusieurs façon de faire, soit avec un for, soit avec la méthode filter() une fois ça fait utilise la méthode sort() qui permet de trier un tableau.

// CODE ICI
const numberFilter = (someArray) => {
  const newArray = [];
  someArray.filter((element) => {
    if (element % 2 == 0) {
      newArray.push(element);
    }
  });
  newArray.sort((a, b) => {
    return a - b;
  });
  return console.log("Exo 19 : " + newArray);
};
const myArray19 = [36, 2, 10, 9, 6, 5, 6];
numberFilter(myArray19);
//----------------------------------------------------------------------------------------------//

// EXERCICE 20

// Vous avez réussi à passer le premier niveau des algos, bravo ! Maintenant on va passer au niveau 2.

// Crée une fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.
// Exemple :
// findShort("Prachett is the best author in the world ") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

// Indice : la méthode split() permet de transformer une string en tableau en fonction d'un séparateur :
// const maString = "Hello World"
// const monTableau = maString.split(" ")
// console.log(monTableau) // ["Hello", "World"]
// Indice 2 :  Oublie pas de boucler sur le tableau pour récupérer la longueur de chaque mot. Que soit avec un for ou avec la méthode map().
// Indice 3 : Pour récupérer le mot le plus court tu dois voir la longueur de chaque mot, quel méthode permet de récupérer la longueur d'une string ?
// Indice 4 : Pour récupérer le mot le plus court tu dois le trier, quel méthode permet de trier un tableau ? Si tu as utilisé la méthode map() pour récupérer la longueur de chaque mot, tu peux utiliser la méthode sort() directement sur le tableau que tu as récupéré avec la méthode map().
// Indice 5 : Le .sort() trie les nombres en fonction de leur valeur unicode, pour trier des nombres il faut utiliser une fonction de comparaison :
// const monTableau = [1, 2, 3, 4, 5]
// const monTableauTri = monTableau.sort((a, b) => {
//   return a - b
// })
// Indice 6 : Pour récupérer le premier élément d'un tableau tu peux utiliser la notation crochet : monTableau[0]

// CODE ICI

// Solution 1
// const findShort = (someString) => {
//     const array = someString.split(' ');
//     const newArray = [];
//     // console.log(array);
//     for (let i = 0; i < array.length; i++) {
//         // console.log(`${array[i]} and it's length is ${array[i].length}`)
//         newArray.push(array[i].length);
//     }
//     // console.log(newArray);
//     newArray.sort((a,b) => {
//         return a-b;
//     })
//     return console.log(`Exo 20 : result is ${newArray[0]}`)
// }
// const string1 = "Prachett is the best author in the world";
// const string2 = "The quick brown fox jumps over the lazy dog";
// findShort(string2);

//Solution 2
// const findShort = (someString) => {
//     const array = someString.split(' ');
//     const newArray = [];
//     array.map((element) => {
//         newArray.push(element.length);
//         // console.log(newArray);
//     }).sort((a,b)=>{
//         return a-b
//     })
//     console.log(newArray)
//     return console.log(newArray[0])
// }
// const string1 = "Prachett is the best author in the world";
// const string2 = "The quick brown fox jumps over the lazy dog";
// findShort(string1);

//Solution 3

const findShort = (someString) => {
  let array = someString.split(" ");
  let arrayLength = array.map((element) => {
    return element.length;
  });
  let arraySort = arrayLength.sort((a, b) => {
    return a - b;
  });
  return console.log(`Exo 20 : ${arraySort[0]}`);
};

const sentences = {
  string1: "Prachett is the best author in the world",
  string2: "The quick brown fox jumps over the lazy dog",
};
findShort(sentences.string2);

//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const findShort = (phrase) => {
//   let tableau = phrase.split(" ");
//     let tableauLongueur = tableau.map((element) => {
//         return element.length
//         }
//     )
//     let tableauTri = tableauLongueur.sort((a, b) => {
//         return a - b
//     }
//     )
//     return tableauTri[0]
// }

// console.log(findShort("Prachett is the best author in the world"))

//----------------------------------------------------------------------------------------------//

// EXERCICE 21

//Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre.
//Deux chaînes sont des anagrammes l'une de l'autre si elles contiennent les caractères, quel que soit l'ordre des caractères.
//Par exemple, "listen" et "silent" sont des anagrammes l'une de l'autre

// Indice : Oubliez pas de transformer les string en tableau pour pouvoir les trier et les comparer. Utilisez la méthode split() pour transformer
//une string en tableau et la méthode sort() pour trier un tableau. Puis comparez les deux tableaux avec la méthode join() qui permet de transformer un tableau en string.

// CODE ICI

const anagram = (chaine1, chaine2) => {
  const array1 = chaine1.split("");
  // console.log(array1)
  const array2 = chaine2.split("");
  let array1Sort = array1.sort();
  // console.log(array1Sort);
  let array2Sort = array2.sort();
  let newString1 = array1Sort.join();
  let newString2 = array2Sort.join();

  if (newString1 === newString2) {
    return console.log(`Exo 21 : ${true}`);
  } else {
    return console.log(`Exo 21 : ${false}`);
  }
};

const string1 = "silent";
const string2 = "listen";

anagram(string1, string2);

//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const anagram = (string1, string2) => {
//     let tableau1 = string1.split("")
//     let tableau2 = string2.split("")
//     let tableau1Tri = tableau1.sort()
//     let tableau2Tri = tableau2.sort()
//     if (tableau1Tri.join("") === tableau2Tri.join("")) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(anagram("listen", "silent"))

//----------------------------------------------------------------------------------------------//

// EXERCICE 22

//Ecrivez une fonction qui enlève les doubles lettres d'une chaîne donnée. Par exemple, "google" deviendrait "gogle"
// Par exemple :
// removeDoubleLetters("google") // "gogle"
// removeDoubleLetters("Hello World!") // "Helo World!"
//Indice : Afin de supprimer les doubles lettres, vous devez parcourir la chaîne et comparer chaque caractère avec le
// caractère suivant. Si les deux caractères sont identiques, vous devez supprimer le deuxième caractère. Donc pour pouvoir
//comporaer chaque caractère avec le suivant, vous devez transformer la string en tableau.
// Indice 2 : Pour supprimer un élément d'un tableau vous pouvez utiliser la méthode splice() combiné à une boucle ou la méthode
//filter() qui permet de filtrer un tableau en fonction d'une condition.

// CODE ICI

// const removeDoubleLetters = (someString) => {
//     let array = someString.split("")
//     // console.log(array);
//     for (i = 0; i<array.length; i++) {
//         // console.log(array)
//         if (array[i] === array[i+1]) {
//             array.splice(i, 1)
//             // console.log(array)
//         }
//     }
//     console.log(array)
//     let newString = array.join('')
//     return console.log(`Exo 22 : ${newString}`)

// }
// const string3 = "google";
// removeDoubleLetters(string3)

const removeDoubleLetters = (someString) => {
  const array = someString.split("");
  let newArray = array.filter((element, index) => {
    return element !== array[index + 1];
  });
  let newString = newArray.join("");
  return console.log(`Exo 22 : ${newString}`);
};

const string3 = "google";
removeDoubleLetters(string3);

//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const removeDoubleLetters = (string) => {
//     let tableau = string.split("")
//     let tableauFiltre = tableau.filter((element, index) => {
//         return element !== tableau[index + 1]
//     })
//     return tableauFiltre.join("")
// }

// console.log(removeDoubleLetters("google"))

// const removeDoubleLetters = (string) => {
//     let tableau = string.split("")
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i] === tableau[i + 1]) {
//             tableau.splice(i, 1)
//         }
//     }
//     return tableau.join("")
// }
// console.log(removeDoubleLetters("google"))

//----------------------------------------------------------------------------------------------//

// EXERCICE 23

//Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme
// d'un numéro de téléphone.
// Exemple :
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) // "(123) 456-7890"
// Indice : Utilisez la méthode slice() pour découper le tableau en plusieurs morceaux. Puis utilisez la méthode join() pour
// transformer un tableau en string.

// CODE ICI
const createPhoneNumber = (someNumbers) => {
  let firstThreeNumbers = someNumbers.slice(0, 3);
  let firstString = firstThreeNumbers.join("");
  let nextThreeNumbers = someNumbers.slice(firstThreeNumbers.length, 6);
  let nextString = nextThreeNumbers.join("");
  let lastNumbers = someNumbers.slice(6, someNumbers.length);
  let lastString = lastNumbers.join("");

  return "(" + firstString + ") " + nextString + "-" + lastString;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(`Exo 23 : ${createPhoneNumber(numbers)}`);

//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const createPhoneNumber = (tableau) => {
//     let tableau1 = tableau.slice(0, 3)
//     let tableau2 = tableau.slice(3, 6)
//     let tableau3 = tableau.slice(6, 10)
//     return `(${tableau1.join("")}) ${tableau2.join("")}-${tableau3.join("")}`
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

//----------------------------------------------------------------------------------------------//

// EXERCICE 24

//Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres
//(en tant que chaînes de caractères) et qui renvoie la lettre manquante de la série. Si aucune lettre n'est manquante,
//la fonction doit renvoyer "undefined".
// Exemple :
// findMissingLetter(["a","b","c","d","f"]) // "e"
// findMissingLetter(["O","Q","R","S"]) // "P"
// Indice : Oubliez pas de boucler et vous pouvez utiliser la méthode charCodeAt() pour récupérer le code unicode d'un caractère.
// Indice 2 : Vous pouvez utiliser la méthode fromCharCode() pour récupérer un caractère à partir de son code unicode.
//Exemple : String.fromCharCode(65) renvoie "A". Mais attention à refaire la boucle dans l'autre sens pour pouvoir comparer
//les codes unicode des caractères du tableau avec les codes unicode des caractères manquants.
// Indice 3 : Il y a plus cas comparer les codes unicode des caractères du tableau avec les codes unicode des caractères
//manquants pour trouver le caractère manquant avec une condition if. Et retourner le caractère manquant avec un return et
//la méthode fromCharCode().

// CODE ICI
const findMissingLetter = (someArray) => {
  let unicodeArray = [];
  for (i = 0; i < someArray.length; i++) {
    let unicode = someArray[i].charCodeAt(0);
    unicodeArray.push(unicode);
  }
  // console.log(unicodeArray)
  for (let i = 0; i < unicodeArray.length; i++) {
    if (unicodeArray[i] !== unicodeArray[i + 1] - 1) {
      return String.fromCharCode(unicodeArray[i] + 1);
    }
  }
};
const array24 = ["O", "Q", "R", "S"];
console.log(`Exo 24 : Missing letter is ${findMissingLetter(array24)}`);

//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
// const findMissingLetter = (tableau) => {
//     let tableauUnicode = tableau.map((element) => {
//         return element.charCodeAt()
//     })
//     for (let i = 0; i < tableauUnicode.length; i++) {
//         if (tableauUnicode[i] !== tableauUnicode[i + 1] - 1) {
//             return String.fromCharCode(tableauUnicode[i] + 1)
//         }
//     }
// }

// console.log(findMissingLetter(["a","b","c","d","f"]))

//----------------------------------------------------------------------------------------------//

// EXERCICE 25

//Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple :
// sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]
// sortString(["lait", "beurre", "fromage", "yaourt"]) // ["beurre", "fromage", "lait", "yaourt"]

//Indice : Vous pouvez utiliser la méthode sort() pour trier un tableau. Mais attention, par défaut la méthode sort() trie les éléments d'un
//tableau par ordre alphabétique en se basant sur les codes unicode des caractères. Donc si vous utilisez la méthode sort() sur un tableau de string,
//les éléments seront triés par ordre alphabétique en se basant sur les codes unicode des caractères. Par exemple, "Banana" sera considéré comme plus petit
//que "Orange" car le code unicode de "B" est plus petit que le code unicode de "O". Pour trier un tableau de string par ordre alphabétique en se basant sur
//l'ordre alphabétique des lettres, vous devez utiliser une fonction de comparaison en paramètre de la méthode sort().
// Indice 2 : Pour trier un tableau de string par ordre alphabétique en se basant sur l'ordre alphabétique des lettres, vous devez utiliser une fonction de
//comparaison en paramètre de la méthode sort(). Cette fonction de comparaison prend deux paramètres (a et b) et renvoie un nombre négatif si a est plus petit que b,
//un nombre positif si a est plus grand que b et 0 si a est égal à b.

// CODE ICI

const alphaOrder = (someArray) => {
  someArray.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
  });
  return console.log(`Exo 25 : ${someArray}`);
};

const array25 = ["Banana", "Orange", "Apple", "Mango"];
alphaOrder(array25);

//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const sortString = (tableau) => {
//     return tableau.sort((a, b) => {
//         if (a.toLowerCase() < b.toLowerCase()) {
//             return -1
//         }
//         if (a.toLowerCase() > b.toLowerCase()) {
//             return 1
//         }
//         return 0
//     })
// }

// console.log(sortString(["Banana", "Orange", "Apple", "Mango"]))

// EXERCICE 26
// Écris une fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// ( Rappel : la somme des trois angles d'un triangle est toujours égale à 180 degrés )
// Exemple :
// otherAngle(30, 60) // 90
// otherAngle(60, 60) // 60
// Indice : Pour trouver le troisième angle, tu dois soustraire la somme des deux angles donnés à 180 degrés.

// CODE ICI
const otherAngle = (a, b) => {
  const angleTotal = 180;
  return angleTotal - (a + b);
};
const angle1 = 60;
const angle2 = 60;
console.log(`Exo 26 : ${otherAngle(angle1, angle2)}`);
//----------------------------------------------------------------------------------------------//

// EXERCICE 27
// Écris une fonction qui peut déterminer si une année est une année bissextile ou non. Elle doit renvoyer true si c'est le cas, sinon false.
// ( Rappel : Une année bissextile est une année contenant 366 jours au lieu de 365. Elle est donc plus longue qu'une année normale. Une année bissextile a lieu tous les 4 ans. )
// Exemple :
// isLeapYear(2020) // true
// isLeapYear(2021) // false
// Indice : Pour savoir ça tu peux utiliser le modulo. Si une année est divisible par 4 et que le reste de la division est égal à 0, alors c'est une année bissextile.

// CODE ICI
const isLeapYear = (y) => {
  if (y % 4 == 0) {
    return true;
  } else if (y % 4 == 0 && y % 100 == 0) {
    return true;
  } else {
    return false;
  }
};
const year = 2021;
console.log(`Exo 27 : ${isLeapYear(year)}`);
//----------------------------------------------------------------------------------------------//

// EXERCICE 28

// Voici un example de tableau d'animaux. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renvoie un nouveau tableau qui lui même contient deux sous-tableaux. Le premier sous-tableau doit contenir les animaux domestiques et le second les animaux sauvages. Les animaux domestiques doivent être triés par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé.

// const animals = [
//     { name: "Panda", type: "Wild" },
//     { name: "Cat", type: "Domestic" },
//     { name: "Turtle", type: "Domestic" },
//     { name: "Dog", type: "Domestic" },
//     { name: "Crocodile", type: "Wild" },
//     { name: "Eagle", type: "Wild" },
//     { name: "Donkey", type: "Domestic" },
//     { name: "Pigeon", type: "Domestic" },
//     { name: "Monkey", type: "Wild" }
//   ]

// Exemple :
// sortAnimals(animals) // [["Cat", "Dog", "Donkey", "Pigeon", "Turtle"], ["Eagle", "Monkey", "Panda", "Crocodile"]]
// Indice : Oubliez pas que tu peux créer des variables qui contiennent des tableaux vides et que tu peux ajouter des éléments à un tableau avec la méthode push(). Mais vu que tu dois analyser le tableau d'animaux pour le trier, tu dois utiliser une boucle et faire des conditions if pour savoir si l'animal est domestique ou sauvage. Et tu dois trier les animaux domestiques par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé. Pour trier un tableau par ordre alphabétique tu peux utiliser la méthode sort(). Pour trier un tableau par ordre alphabétique inversé tu peux utiliser la méthode reverse().

// CODE ICI
const animalsFilter = (someArray) => {
  let filteredAnimals = [[], []];
  someArray.map((animal) => {
    if (animal.type === "Domestic") {
      filteredAnimals[[0]].push(animal.name);
      return filteredAnimals[[0]].sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        } else if (a.toLowerCase() < b.toLowerCase()) {
          return -1;
        }
      });
    } else {
      filteredAnimals[[1]].push(animal.name);
      return filteredAnimals[[1]].sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
          return 1;
        } else if (a.toLowerCase() > b.toLowerCase()) {
          return -1;
        }
      });
    }
  });
  return console.log(filteredAnimals);
};
const animals = [
  { name: "Panda", type: "Wild" },
  { name: "Cat", type: "Domestic" },
  { name: "Turtle", type: "Domestic" },
  { name: "Dog", type: "Domestic" },
  { name: "Crocodile", type: "Wild" },
  { name: "Eagle", type: "Wild" },
  { name: "Donkey", type: "Domestic" },
  { name: "Pigeon", type: "Domestic" },
  { name: "Monkey", type: "Wild" },
];

animalsFilter(animals);

// EXERCICE 29

// Un employé de théatre souhaite obtenir la liste de tous les sièges de sa salle principal. Dans la salle les places sont réparties comme suit :
// - Il y a 26 colonnes de sièges, numérotées de "1" à "26".
// - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

// Complète la function theatreSieges() qui doit renvoyer un tableau où chaque sous-tableau répertorie les positions des siègnes dans une rangée.
// Exemple  du résultat attendu :
// [
// ["1-1", "1-2", "1-3", ..., "1-99", "1-100"],
// ["2-1", "2-2", "2-3", ..., "2-99", "2-100"],
// ["3-1", "3-2", "3-3", ..., "3-99", "3-100"],
// ...
// ["26-1", "26-2", "26-3", ..., "26-99", "26-100"]
// ]

// Indice : Tu dois utiliser deux boucles imbriquées pour créer les sous-tableaux. La première boucle doit parcourir les colonnes et la seconde boucle doit parcourir les sièges de chaque colonne.

// CODE ICI

const theatreSeats = (column, row) => {
  let seatsTable = [];

  for (i = 1; i <= column; i++) {
    let rang = i;
    let rangSeats = [];
    for (j = 1; j <= row; j++) {
      rangSeats.push(`${rang} - ${j}`);
    }
    seatsTable.push(rangSeats);
  }
  return seatsTable;
};

const rangs = 26;
const seatsPerRang = 100;
const result = theatreSeats(rangs, seatsPerRang);
console.log("Exo 29 : ");
// console.log(result);

//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const theatreSieges = () => {
//     let tableau = []
//     for (let i = 1; i <= 26; i++) {
//         let tableau2 = []
//         for (let j = 1; j <= 100; j++) {
//             tableau2.push(`${i}-${j}`)
//         }
//         tableau.push(tableau2)
//     }
//     return tableau
// }

// console.log(theatreSieges())

//----------------------------------------------------------------------------------------------//

// EXERCICE 30

/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.

["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/
//Indice : Tu dois utiliser une boucle for pour parcourir le tableau et une condition if pour savoir si notre équipe a gagné, perdu ou fait match nul. Et tu dois ajouter les points de chaque match à une variable score qui doit être initialisée à 0. Et tu dois retourner la variable score à la fin de la fonction.

// CODE ICI
const finalScore = (someArray) => {
  let score = 0;
  for (i = 0; i < someArray.length; i++) {
    if (someArray[i][0] > someArray[i][2]) {
      score += 3;
    } else if (someArray[i][0] === someArray[i][2]) {
      score += 1;
    }
  }
  return console.log(`Exo 30 : ${score}`);
};
const tableOfScores = [
  "1:0",
  "2:0",
  "3:0",
  "4:4",
  "2:2",
  "3:3",
  "1:4",
  "2:3",
  "2:4",
  "3:3",
];
finalScore(tableOfScores);

//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const footballPoints = (tableau) => {
//     let score = 0
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i][0] > tableau[i][2]) {
//             score += 3
//         } else if (tableau[i][0] === tableau[i][2]) {
//             score += 1
//         }
//     }
//     return score
// }
// console.log(footballPoints(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]))

//----------------------------------------------------------------------------------------------//

// EXERCICE 31

/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

//Indice : Tu dois utiliser une boucle for pour parcourir les tableaux et une condition if pour savoir si un élément est vide. Si un élément est vide tu dois le remplacer par 0. Et tu dois ajouter les éléments des deux tableaux à une variable tableau3 qui doit être initialisée à un tableau vide. Et tu dois retourner le tableau3 à la fin de la fonction.

// CODE ICI
const arraySum = (array1, array2) => {
  let sum = [];
  if (array1.length > array2.length) {
    let dif = array1.length - array2.length;
    for (i = 0; i < dif; i++) {
      array2.push("0");
    }
  } else {
    let dif = array2.length - array1.length;
    for (i = 0; i < dif; i++) {
      array1.push("0");
    }
  }
  for (i = 0; i < array1.length; i++) {
    sum.push(parseInt(array1[i]) + parseInt(array2[i]));
  }
  return sum;
};
const array31One = ["2", "7", "3", "8", "2"];
const array31Two = ["2", "4", "9"];
console.log("Exo 31 : " + arraySum(array31One, array31Two));

const sumArr = (tableau1, tableau2) => {
  let tableau3 = [];
  for (let i = 0; i < tableau1.length; i++) {
    if (tableau1[i] === "") {
      tableau1[i] = 0;
    }
    if (tableau2[i] === "") {
      tableau2[i] = 0;
    }
    tableau3.push(parseInt(tableau1[i]) + parseInt(tableau2[i]));
  }
  return tableau3;
};

console.log(
  "Exo 31 proposed solution: " +
    sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"])
);

//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const sumArr = (tableau1, tableau2) => {
//     let tableau3 = []
//     for (let i = 0; i < tableau1.length; i++) {
//         if (tableau1[i] === "") {
//             tableau1[i] = 0
//         }
//         if (tableau2[i] === "") {
//             tableau2[i] = 0
//         }
//         tableau3.push(parseInt(tableau1[i]) + parseInt(tableau2[i]))
//     }
//     return tableau3
// }

// console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]))

//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// EXERCICE 32

// Écris une fonction generatedCharacter qui crée de manière aléatoires des personnages donjon et dragon avec une classe et des noms de personnages. La fonction doit renvoyer un tableau de personnages.
// Exemple du résultat attendu :
// [
//   ["Aldric", "barbarian"],
//   ["Dolgrin", "bard"],
//   ["Ernst", "cleric"],
//   ["Gellius", "druid"],
//   ["Gorstag", "fighter"]
// ]

// Indice : Tu dois créer un tableau vide et le remplir avec des tableaux qui contiennent un nom et une classe. Pour créer un nom aléatoire tu dois créer un tableau de noms et utiliser la méthode Math.random() pour récupérer un nom aléatoire dans le tableau de noms. Pour créer une classe aléatoire tu dois créer un tableau de classes et utiliser la méthode Math.random() pour récupérer une classe aléatoire dans le tableau de classes. Et tu dois faire une boucle pour créer 10 personnages.

// CODE ICI
const generatedCharacter = (array1, array2) => {
  let generatedArray = [];

  for (i = 0; i < 10; i++) {
    let intermediateArray = [];
    let randomName = array1[Math.floor(Math.random() * array1.length)];
    let randomClass = array2[Math.floor(Math.random() * array2.length)];
    intermediateArray.push(randomName);
    intermediateArray.push(randomClass);
    generatedArray.push(intermediateArray);
  }
  return generatedArray;
};

// const generatedCharacter = (array1, array2) => {
//   let newArray = [];
//   array1.map((element) => {
//     let intermediateArray = [];
//     intermediateArray.push(element);
//     let randomClass = array2[Math.floor(Math.random() * array2.length)];
//     intermediateArray.push(randomClass);
//     newArray.push(intermediateArray);
//   });
//   return newArray;
// };

let tableauName = [
  "Aldric",
  "Dolgrin",
  "Ernst",
  "Gellius",
  "Gorstag",
  "Hagar",
  "Jozan",
  "Kef",
  "Leve",
  "Morn",
  "Perrin",
  "Reed",
  "Rulf",
  "Shandar",
  "Taman",
  "Urth",
];
let tableauClass = [
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
];
console.log("Exo 32 : ");
console.log(generatedCharacter(tableauName, tableauClass));
//-----------------------------------------------SOLUTIONS-----------------------------------------------//
// const generatedCharacter= () => {
//     let tableau = []
//     for (let i = 0; i < 10; i++) {
//         let tableau2 = []
//         let randomName = tableauName[Math.floor(Math.random() * tableauName.length)]
//         let randomClass = tableauClass[Math.floor(Math.random() * tableauClass.length)]
//         tableau2.push(randomName)
//         tableau2.push(randomClass)
//         tableau.push(tableau2)
//     }
//     return tableau
// }

// console.log(generatedCharacter())

//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// Explication ici nous allons résoudre l'algo avec un .map(). Pourquoi ? Car le .map() permet de parcourir un tableau et de retourner un nouveau tableau avec les éléments modifiés. Donc ici nous allons parcourir le tableauName avec un .map() et pour chaque élément du tableauName nous allons créer un tableau avec un nom aléatoire et une classe aléatoire. Et nous allons retourner ce tableau. Donc le .map() va créer un nouveau tableau avec des tableaux qui contiennent un nom aléatoire et une classe aléatoire. Et nous allons stocker ce nouveau tableau dans une variable tableau. Et nous allons retourner ce tableau à la fin de la fonction.

// Comme vous pouvez le voir il y a plusieurs façon de réussir à avoir le résultat attendu d'un algo. Il y a pas de bonne ou de mauvaise façon de faire. Il y a juste des façons plus optimisées que d'autres. Et il y a des façons plus simples que d'autres. Mais le plus important c'est de réussir à trouver une solution qui fonctionne. Et si vous avez réussi à trouver une solution qui fonctionne, c'est déjà très bien.

// const generatedCharacter = () => {
//     let tableau = []
//     tableauName.map((element) => {
//         let tableau2 = []
//         let randomClass = tableauClass[Math.floor(Math.random() * tableauClass.length)]
//         tableau2.push(element)
//         tableau2.push(randomClass)
//         tableau.push(tableau2)
//     })
//     return tableau
// }

// console.log(generatedCharacter())

//----------------------------------------------------------------------------------------------//

// EXERCICE 33

//Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres (en tant que chaînes de caractères) et qui renvoie la lettre manquante de la série. Si aucune lettre n'est manquante, la fonction doit renvoyer "undefined".
// Exemple :
// findMissingLetter(["a","b","c","d","f"]) // "e"
// findMissingLetter(["O","Q","R","S"]) // "P"

//Indice : Oubliez pas la méthode charCodeAt() est utile pour récupérer le code unicode d'un caractère.
//Le unicode est une norme informatique qui permet de représenter des caractères de toutes les langues du monde. Chaque caractère possède un code unicode qui lui est propre. Par exemple, le code unicode de "A" est 65, le code unicode de "B" est 66, le code unicode de "C" est 67, etc. Pour récupérer le code unicode d'un caractère vous devez utiliser la méthode charCodeAt(). Cette méthode prend en paramètre l'index du caractère dans la string. Par exemple, si vous voulez récupérer le code unicode du premier caractère de la string vous devez utiliser la méthode charCodeAt(0). Si vous voulez récupérer le code unicode du deuxième caractère de la string vous devez utiliser la méthode charCodeAt(1). Et ainsi de suite.

// CODE ICI
const findMissingLetterNew = (someArray) => {
  let newArray = [];
  someArray.map((element) => {
    let uniCode = element.charCodeAt(0);
    console.log(uniCode);
    newArray.push(uniCode);
    console.log(newArray);
    return newArray;
  });
};

const lettersArray = ["a", "b", "c", "d", "f"];
console.log(findMissingLetterNew(lettersArray));
//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const findMissingLetter = (tableau) => {
//     let tableauUnicode = tableau.map((element) => {
//         return element.charCodeAt()
//     })
//     for (let i = 0; i < tableauUnicode.length; i++) {
//         if (tableauUnicode[i] !== tableauUnicode[i + 1] - 1) {
//             return String.fromCharCode(tableauUnicode[i] + 1)
//         }
//     }
// }

// console.log(findMissingLetter(["a","b","c","d","f"]))
