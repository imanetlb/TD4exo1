var num1 = prompt("Entrez le premier nombre :");
var num2 = prompt("Entrez le deuxième nombre :");

if ((num1 === 0) || (num2 === 0)) {
  console.log("Le produit est nul");
} else if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
  console.log("Le produit est positif");
} else {
  console.log("Le produit est négatif");
}