function factorialCalculatorStarten(){
    let num = 5; // 5*4*3*2*1 = 120

    function factorialCalculator(num){
    let result = 1;
    let i = 1;
    while (i <= num){
        result = i * result;
        i++;
    }
    return result;
    }

    let factorial = factorialCalculator(num);
    let resultMsg = `Factorial of ${num} is ${factorial}`;

    console.log(resultMsg);
}