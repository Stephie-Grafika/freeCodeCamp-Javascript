function quizGameStarten(){

    // 1. DER FRAGEN-KATALOG
    // Ein Array, das 5 Objekte (Fragen) enthält.
    const questions = [
    {
        category: "Fragen-Kategorie 1",
        question: "Welche Frage 1?",
        choices: ["✓Antwortoption 1A", "Antwortoption 1B", "Antwortoption 1C"],
        answer: "✓Antwortoption 1A"
    },
    {
        category: "Fragen-Kategorie 2",
        question: "Welche Frage 2?",
        choices: ["Antwortoption 2A", "✓Antwortoption 2B", "Antwortoption 2C"],
        answer: "✓Antwortoption 2B"
    },
    {
        category: "Fragen-Kategorie 3",
        question: "Welche Frage 3?",
        choices: ["Antwortoption 3A", "Antwortoption 3B", "✓Antwortoption 3C"],
        answer: "✓Antwortoption 3C"
    },
    {
        category: "Fragen-Kategorie 4",
        question: "Welche Frage 4?",
        choices: ["✓Antwortoption 4A", "Antwortoption 4B", "Antwortoption 4C"],
        answer: "✓Antwortoption 4A"
    },
    {
        category: "Fragen-Kategorie 5",
        question: "Welche Frage 5?",
        choices: ["Antwortoption 5A", "✓Antwortoption 5B", "Antwortoption 5C"],
        answer: "✓Antwortoption 5B"
    }
    ];

    // 2. DIE FRAGEN-AUSWAHL
    // Funktion wählt über Index zufällige Frage (Objekt) aus Array questions aus 
    function getRandomQuestion(questionArray){
    let randomQuestionIndex = Math.floor(Math.random() * questionArray.length);
    return questionArray[randomQuestionIndex];
    }

    // 3. COMPUTER RÄT ANTWORT
    // Zufällige Auswahl der 3 Antwortmöglichkeiten
    function getRandomComputerChoice(choicesArray){
    let randomAnswerIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomAnswerIndex];
    }

    // 4. AUFLÖSUNG
    // Stimmt gesuchte Antwort und zufällige Auswahl überein?
    function getResults(questionObject, computerChoice){
    if (computerChoice == questionObject.answer){
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
    }
    }

    // 5. AUSGABE
    const selectedQuestion = getRandomQuestion(questions); // 1. Frage wählen
    const compChoice = getRandomComputerChoice(selectedQuestion.choices); // 2. Computer tippt
    const finalResult = getResults(selectedQuestion, compChoice); // 3. Prüfen

    console.log(selectedQuestion.question);
    console.log("Computer chose: " + compChoice);
    console.log(finalResult);

}