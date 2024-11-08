function filtrerTexte(chaine, filtre) {
	return chaine.split("").filter(filtre).join("");
}

function estVoyelle(c) {
	return "aeioAEIO".includes(c);
}

console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat : "oo"
