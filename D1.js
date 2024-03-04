/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 1-")
console.log(
  "i dati in javascript sono come dei mattoni che compongono una struttura"
)
console.log(
  "Col datatype Numerico puoi registrare e utilizzare numeri interi o decimali;"
)
console.log(
  "Col datatype Stringa puoi registrare porzioni di testo purché siano circondate con le ' '"
)
console.log("il datatype Booleano restituisce sempre o vero o falso")
console.log("il datatype Null indica un valore che è VOLUTAMENTE vuoto.")
console.log(
  "il datatype undefined indica che una variabile è stata dichiarata ma ancora non ha un valore definito"
)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("-Esercizio 2-")
console.log("const myName = 'Federico'")
const myName = "Federico"
console.log("console.log(myName)")
console.log("🆗 " + myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("-Esercizio 3-")
console.log("let a = 12 ")
console.log("let b = 20 ")
let a = 12
let b = 20
console.log("console.log(a+b)")
console.log("🆗 " + (a + b))

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("-Esercizio 4-")
console.log("const x = 12")
let x = 12
console.log("console.log(x)")
console.log("🆗 " + x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("-Esercizio 5-")
console.log("let surName = undefined")
console.log("let input = 'il tuo cognome'")
console.log("console.log(surName = input)")
let surName = undefined
let input = "il tuo cognome"
console.log("🆗 " + (surName = input))
console.log(
  "- Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.-"
)
//const a = 1
//console.log((a = 2))
console.log("const a = 1")
console.log("console.log((a = 2)")
console.log(
  "Uncaught SyntaxError: Identifier 'a' has already been declared (at D1.js:70:7)"
)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-Esercizio 6-")
console.log("!let x = 12") //ho gia dichiarato x
console.log("console.log(x - 4)")
x = 12
console.log("🆗 " + (x - 4))

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("-Esercizio 7-")
const name1 = "john"
const name2 = "John"
console.log("console.log(name1 !== name2);")
console.log("🆗 " + (name1 !== name2))
console.log("🆗 " + (name1.toLowerCase() === name2.toLowerCase()))
