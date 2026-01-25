function vokabelTraining(){
    // Vokabel-Training
    const vokabeln = [
        {
          deutsch: "Apfel",
          englisch: "apple",
          beispiele: ["I eat an apple", "The apple is red"]
        },
        {
          deutsch: "Haus",
          englisch: "house",
          beispiele: ["This is my house"]
        }
    ];

    function beispielAuslesen(beispiele, beispielIndex){

    }
    function erstelleNeueVokabel(deutsch, englisch, beispiel){
        let neueVokabel = {
            deutsch: deutsch,
            englisch: englisch,
            beispiele: [beispiel]
        };
        push(neueVokabel);
        console.log(neueVokabel(deutsch, englisch, beispiel))
        return neueVokabel;
    }
    function erstelleNeuesBeispiel(beispiele){
        const neuesBeispiel = beispiele.push(beispielUebergeben);
        return beispiele;
    }
}