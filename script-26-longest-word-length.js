function longestWordLengthStarten (){
    function findLongestWordLength(sentence){
        if (sentence.trim() === ''){
          return 0;
        }
        let words = sentence.trim().split(' ');
        let longestWordLength = 0;
        for (const word of words){
          if (word.length > longestWordLength)
          longestWordLength = word.length;
        }
        return longestWordLength;
      }
}