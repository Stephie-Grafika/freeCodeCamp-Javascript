function bibliothek(){
    // Buch-Bibliothek mit Kategorien
    const bibliothek = {
        krimi: [
        { titel: "Sherlock Holmes", autor: "Arthur Conan Doyle", verfügbar: true },
        { titel: "Der Insasse", autor: "Sebastian Fitzek", verfügbar: false }
        ],
        scienceFiction: [
        { titel: "Dune", autor: "Frank Herbert", verfügbar: true }
        ]
    };
    // Definition: Funktin mit 1. Platzhalter, 2. Platzhalter
    function verleiheBuch(kategorie, buchIndex){
        // Der Zugriff auf die Bücher wird in  Konstante gespeichert, statt jedes Mal wieder alles zu definieren
        // Hier ist die Klammer-Notation nötig, weil dynamisch kategorie ist Platzhalter für Property/Eigenschaft im Objekt bibliothek ist)
        const buch = bibliothek[kategorie][buchIndex];
    // verfügbar mit Anführungszeichen ["verfügbar"], weil verfügbar keine Variable ist, sondern eine Eigenschaft im Objekt -> nicht mit Punktnotation wegen ü, geht in neuen Versionen aber
        if (buch["verfügbar"] === true) {
            buch["verfügbar"] = false;
            // titel mit Punktnotation oder in Klammer mit Anführungszeichen ["titel"], weil titel keine Variable ist, sondern eine Eigenschaft im Objekt
            return `Das Buch ${buch.titel} wurde erfolgreich verliehen.`
        } else {
            return `Entschuldigung, das Buch ${buch.titel} ist bereits verliehen.`;
        } 
        
    }
    // Aufruf: Tauscht Platzhalter mit 1. Wert, 2. Wert
    // Weil nach den Kategorien ein Array mommt, wird der 2. Platzhalter/Wert automatisch als Index gedeutet
    console.log(verleiheBuch("krimi", 0)); // Buch war verfügbar
    console.log(verleiheBuch("krimi", 0)); // Buch war nicht mehr verfügbar
}