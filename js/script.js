//  Creare un oggetto che descriva uno studente: nome, cognome, età
var studente = {
  'nome': 'piero',
  'cognome': 'rossi',
  'eta': 15
}
// Stampare le proprietà dell'oggetto attraverso un ciclo 'for in'
for (var key in studente) {
  console.log(studente[key]);
}
// Creare un array di oggetti di studenti
var listaStudenti = [
  {
    'nome': 'piero',
    'cognome': 'rossi',
    'eta': 15
  },
  {
  'nome': 'luigi',
  'cognome': 'bianchi',
  'eta': 18
  }
];

var listaStudenti.push(studente);
// Ciclare su tutti gli studenti e stampare nome e cognome
for (i = 0; i < listaStudenti.length; i++) {

  for (var key2 in listaStudenti[i]) {
    var studenti = listaStudenti[i];
    console.log(studenti[key2]);
  }

}
// L'utente aggiunge un nuovo oggetto composto da: nome cognome e età
var nome
