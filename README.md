# Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# Logica

1. Nell Html, creiamo la struttura (header, main, footer).

2. Con il CSS sistemiamo gli spazi, colori, dimensioni,

3. Le caselle dovranno essere 10x10 

4. Nel Js creiamo funzioni per ogni azione che vogliamo far fare al Programma

5. Creiamo una funzione che crea una elemento con classe e contenuto.

6. Richiamiamo la funzione in un ciclo "for" in modo da creare 100 caselle.

7. Creiamo una funzione con un evento click sulla cella, in modo che cambi colore e il suo contenuto viene stampato in console.

8. Creiamo una funzione con un evento click sul bottone, per far iniziare il gioco, e se premiamo ancora sul bottone, il colore delle celle, si resetta.

# Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

# Logica Bonus

1. Aggiungo un select nell Html, con CSS lo stilizziamo.

2. Nel CSS le classi di dimensioni, le suddivido in 3 dimensioni. 

3. Nel JS con le variabili, prendo il valore delle option dell Html,  

4. Al ciclo, Aggiungo delle condizioni 
    --Se
        Il valore è "100", nel ciclo i <= 100, aggiungiamo la classe " cell-hard "
    --Altrimenti Se
        Il valore è "81", nel ciclo i <= 81. aggiungiamo la classe " cell-normal"
    --Altrimenti Se
        Il valore è "49", nel ciclo i <= 49. aggiungiamo la classe " cell-easy"

