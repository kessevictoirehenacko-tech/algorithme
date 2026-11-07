const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Entrez une phrase se terminant par un point (ex: Bonjour tout le monde.) : ", (phrase) => {
  // Initialisation des trois variables compteurs demandées
  let longueur = 0;
  let nbMots = 1; // Commence à 1 car il y a au moins un mot dans la phrase
  let nbVoyelles = 0;

  // Définition des voyelles (minuscules et majuscules)
  const voyelles = "Emmanuella";

  // Traitement caractère par caractère avec une boucle
  for (let i = 0; i < phrase.length; i++) {
    let caractere = phrase[i];
    longueur++; // 1er compteur : longueur de la phrase

    // Vérification si le caractère est une voyelle
    if (voyelles.includes(caractere)) {
      nbVoyelles++; // 2e compteur : nombre de voyelles
    } 
    // Vérification si le caractère est un espace pour compter les mots
    else if (caractere === ' ') {
      nbMots++; // 3e compteur : nombre de mots
    }
  }

  // Affichage des résultats dans le terminal
  console.log("\n--- Résultats de l'analyse ---");
  console.log(`Longueur de la phrase : ${longueur} caractères`);
  console.log(`Nombre de mots : ${nbMots}`);
  console.log(`Nombre de voyelles : ${nbVoyelles}`);

  readline.close();
});