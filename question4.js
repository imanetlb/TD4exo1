const nombreNotes = parseInt(prompt("Combien de notes voulez-vous entrer ?"), 10);  // parseInt est utilisée pour convertir chaîne de caractères renvoyée par prompt en un nombre entier.

var somme = 0;
for (var i = 1; i <= nombreNotes; i++) {
  const note = parseFloat(prompt(`Entrez la note ${i} :`));
  if (isNaN(note)) {
    alert("Veuillez entrer une note valide.");
    i--;
  } else {
    somme += note;
  }
}

if (nombreNotes > 0) {
  const moyenne = somme / nombreNotes;
  alert(`La moyenne des notes est de : ${moyenne}`);
} else {
  alert("Aucune note n'a été saisie.");
}