function truncateStringAlgorithmStarten(){
    function truncateString(myString, myNumber){
        if (myString.length > myNumber){
          return myString.slice(0, myNumber) + '...';
        } else {
        return myString;
        }
      }
}