function multiplication(x, y) {
  var produit = 0;
  for (var i = 0; i < y; i++) {
    produit += x;
  }
  return produit;
}




function division(x, y) {
  var quotient = 0;
  while (x >= y) {
    x -= y;
    quotient++;
  }
  return quotient;
}





function elevationpuissance(x, y) {
  var puissance = 1;
  for (var i = 0; i < y; i++) {
    puissance *= x;
  }
  return puissance;
}