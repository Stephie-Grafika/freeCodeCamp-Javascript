const botName = 'Stephie';
const botLocation = 'Germany';
const favoriteLanguage = 'Javascript';

function trivialBotStarten(){
    let begruessung = "Hello! I'm your coding fun fact guide!";
    alert(begruessung);

    alert('My name is ' + botName + ' and I live in ' + botLocation + '.');

    alert('My favorite programming language is ' + favoriteLanguage +'.');

    let codingFact1 = 'I love ';
    let codingFact = codingFact1 += favoriteLanguage;
    alert(codingFact);


    let codingFact2 = 'Did you know that I am learning';
    let codingFact3 = 'since December 2025?';
    codingFact = codingFact2.concat(' ', favoriteLanguage, ' ', codingFact3);
    alert(codingFact);

    let codingFact4 = 'Did you know that you can use';
    let codingFact5 = 'to define interaktions and behaviour?';
    codingFact = codingFact4.concat(' ', favoriteLanguage, ' ', codingFact5);
    alert(codingFact);

    alert('It was fun sharing these facts with you. Goodbye! - ' + botName + ' from ' + botLocation + '.');
}