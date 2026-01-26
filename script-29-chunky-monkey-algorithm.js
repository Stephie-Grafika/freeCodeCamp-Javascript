function chunkyMonkeyAlgorithmStarten(){
    function chunkArrayInGroups (arr, num){
        let finalResult = [];
        while (arr.length > 0){
          let currentResult = arr.splice(0, num);
          finalResult.push(currentResult)
        }
        return finalResult;
        /* 
        ["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
        */
      }
}