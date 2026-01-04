function sentenceMakerStarten(){
    let adjective = 'famouse';
    let noun = 'witch';
    let verb = 'tickled';
    let place = 'castle';
    let adjective2 = 'big';
    let noun2 = 'apples';

    let firstStory = 'Once upon a time, there was a(n) ' + adjective + ' ' + noun + ' who loved to eat ' + noun2 + '. The ' + noun + ' lived in a ' + place + ' and had ' + adjective2 + ' nostrils that blew fire when it was ' + verb + '.';
    alert('First story: ' + firstStory);

    adjective = 'old';
    noun = 'ogre';
    verb = 'drilled';
    place = 'forest';
    adjective2 = 'green';
    noun2 = 'children';

    let secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;
    alert('Second story: ' + secondStory);
}