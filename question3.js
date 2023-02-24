function calculerSomme() {
  
  var somme = 0;
  for (var i = 0; i < arguments.length; i++) {
    somme += arguments[i];
  }
  return somme;
}


/* Test de la fonction calculerSomme() */

console.log(calculerSomme(1, 2, 3));      // renvoie 6
console.log(calculerSomme(4, 5, 6, 7));   // renvoie 22
console.log(calculerSomme(10, -5, 3, 8)); // renvoie 16
console.log(calculerSomme());             // renvoie 0
