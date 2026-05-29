# Flagg-quiz

Jeg har laget en quiz der du skal gjette hvilket land et flagg tilhører. Ideen kom fra Kahoot og jeg ville prøve å lage noe lignende. Det starter enkelt med land som Norge og Frankrike og blir vanskeligere mot slutten med land som Nepal og Maladivene.

## Funksjoner

- Flaggbilder med fire svaralternativer
- 20 sekunder per spørsmål
- Viser riktig svar hvis du svarer feil eller tiden går ut
- Lilla design inspirert av Kahoot

## Teknologi

- HTML – strukturen
- CSS – utseendet
- JavaScript – timeren og logikken

Flaggbildene hentes fra flagcdn.com med landkoder som "no" for Norge og "jp" for Japan.

## Slik åpner du det

Åpne index.html i nettleseren. Du trenger internett for at flaggbildene skal vises.

## Refleksjonsnotat

Det vanskeligste jeg synes var timeren. Jeg skjønte ikke hvorfor det startet flere timere samtidig, men det viste seg at jeg måtte stoppe den gamle med clearInterval før jeg startet en ny. 

Det jeg er mest fornøyd med er at svarknappene lages automatisk med JavaScript, så jeg slipper å skrive dem manuelt i HTML for hvert spørsmål. 

Jeg hadde også lyst til å legge til poeng og leaderboard men rakk ikke det.

Alt i alt er jeg ganske fornøyd med det jeg fikk til. Jeg hadde planlagt å legge til poeng og leaderboard, men mistet en uke pga sykdom og rakk ikke det i tide.





