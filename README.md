## SSGS Calculator 

E' un progetto interamente sviluppato in **JavaScript**, con 
l'obiettivo di fornire un semplice calcolatore di stringhe che permette di eseguire piu operazioni nella stessa sessione.

## Prerequisiti
Il prerequisito principale è sicuramente `Node.js` e di conseguenza `npm`.  
Se l'ambiente di sviluppo in cui si sta lavorando dispone gia di `Node.js` ed `npm` allora utilizzare i comandi `node -v` e `npm -v` per verificarne la corretta installazione e le versioni installate.  
Un altro prerequisito importante è `jest`, il quale viene usato per eseguire i test dell'applicazione.

## Istruzioni di installazione
Per avere l'ambiente di sviluppo corretto per questo progetto è necessario installare Node.js a questo [link](https://nodejs.org/en/download) impostando i parametri di installazione a seconda delle esigenze mantenendo npm come gestore dei pacchetti.  
  
Successivamente verificare la corretta installazione sia di Node.js, tramite il comando `node -v`, che di npm, tramite il comando `npm -v`.  
Se entrambi i comandi restituiscono la versione installata dei due pacchetti allora l'ambiente di sviluppo è pronto.  
  
Successivamente, per eseguire i test per l'applicazione, è necessario installare jest tramite il terminale con il comando `npm install jest` all'interno della cartella del progetto.  
Se jest è stato intallato trammite terminale basta eseguire il nomando `npm ls jest` per verificarne la corretta installazione.  
Per facilitare l'esecuzione dei test è possibile installare l'estensione di VS Code (sempre se si utilizza VS Code).  

## Istruzioni di utilizzo
Per avviare l'applicazione è necessario eseguire il comando `node index.js` nella cartella src  
Mentre per eseguire i test basta eseguire il comando `npm test`  
  
**ATTENZIONE**: In questo progetto una volta eseguito il comando per i test verrà visualizzata automaticamente la tabella della coverage.  
Questo perche nel file `package.json` nella sezione "test" è stato volutamente inserito `jest --coverage`.  
Per evitare cio ed eseguire semplicemente i test basta cancellare da tale file `--coverage`.

## Continous Integration
Il progetto dispone di un workflow, presente nellla cartella `.github/workflows` che permette la continous integration.  
Cio vuol dire che (**in questo caso**) ad ogni commit (**o pull-request**) eseguito sul branch master verranno automaticamente eseguiti i test  
del progetto.  
Il risultato puo essere controllato nella sezione `Action` di GitHub.

## Caratteristiche principali
- **100% JavaScript**: Il progetto è interamente implementato in JavaScript, garantendo compatibilità e flessibilità.
- **Funzionalità personalizzabili**: Supporta configurazioni personalizzate per soddisfare diverse esigenze di calcolo.
- **Interfaccia intuitiva**: Facile da usare e progettata per migliorare l'esperienza utente.

## Operazioni disponibili
- **Concatenzione di stringhe**
- **Rimozione degli spazi**
