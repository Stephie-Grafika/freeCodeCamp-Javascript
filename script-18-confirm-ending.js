function confirmEndingStarten(){
    function confirmEnding (checkString, defaultString){
        if (checkString.includes(defaultString, checkString.length - defaultString.length)){
          return true;
        } else {
          return false;
        }
      }
}