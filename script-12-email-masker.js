function emailMaskerStarten(){
    let email = "apple.pie@example.com"; // Standardwert für email, global scope

    function maskEmail(email){
    let indexAt = email.indexOf('@'); // local scope
    let lastDot = email.lastIndexOf('.'); // local scope

    if (
    email.includes('@') && 
    indexAt > 2 &&           // Mind. 3 Zeichen vor dem @
    lastDot > indexAt + 1 && // Mind. 1 Zeichen zwischen @ und .
    email.length - 1 > lastDot // Mind. 1 Zeichen nach dem .
    ){ // wenn valide Email, dann ... -> variablen in if = block scope
        /*let firstUsernameLetter = email.slice(0,1); // erster Buchstabe von Username-Part
        let lastUsernameLetter = email.slice(indexAt-1, indexAt); // letzter Buchstabe vin Username-Part
        let asterisk = '*'.repeat(indexAt-2); // Anzahl von *, wobei man nur 2 abzieht wegen 1. & letztem Buchstaben
        let domainPart = email.slice(indexAt); // DomianPart nach @
        return firstUsernameLetter + asterisk + lastUsernameLetter + domainPart; */
        // ohne Variablen direkt in return: Erster Buchstabe + Sterne + Buchstabe vor @ + Rest ab @
        return 
        email.slice(0,1) + 
        '*'.repeat(indexAt-2) + 
        email.slice(indexAt-1, indexAt) + 
        email.slice(indexAt);
    }else {
        return `Die E-Mail-Adresse ${email} kann nicht maskiert werden`; // Fehlermeldung
    }
    }

    console.log(maskEmail(email)); //"a*******e@example.com"
    console.log(maskEmail('freecodecamp@example.com'));
    console.log(maskEmail('info@test.dev'));
    console.log(maskEmail('user@domain.org'));
    console.log(maskEmail('a@b.de')); // Greift die neue Fehlerprüfung? Ja!
    
}