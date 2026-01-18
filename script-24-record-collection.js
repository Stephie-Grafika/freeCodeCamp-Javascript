function recordCollectionStarten(){
    const recordCollection = {
        2548: {
          albumTitle: 'Slippery When Wet',
          artist: 'Bon Jovi',
          tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
          albumTitle: '1999',
          artist: 'Prince',
          tracks: ['1999', 'Little Red Corvette']
        },
        1245: {
          artist: 'Robert Palmer',
          tracks: []
        },
        5439: {
          albumTitle: 'ABBA Gold'
        }
      };
      
    const recordCollectionCopy = {...recordCollection};
    
    function updateRecords(records, id, prop, value) {
    // 1. Wenn value leer ist, lösche die Eigenschaft
    if (value === "") {
        delete records[id][prop];
    } 
    // 2. Wenn prop nicht "tracks" ist und value nicht leer ist
    else if (prop !== "tracks" /*&& value !== ""*/) {
        records[id][prop] = value;
    } 
    // 3. Wenn prop "tracks" ist
    else {
        // Falls tracks noch nicht existiert, erstelle ein leeres Array
        if (!records[id].hasOwnProperty("tracks")) {
        records[id]["tracks"] = [];
        }
        // Füge den Wert am Ende des Arrays hinzu
        records[id]["tracks"].push(value);
    }
    
    // Immer das gesamte Objekt zurückgeben
    return records;
    }
}