function leapYearCalculatorStarten(){
    let year = 2026;

    function isLeapYear(year){
    // Logik: (Durch 4 UND NICHT durch 100) ODER (Durch 400)
    if ((year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0){
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
    }

    let result = isLeapYear(year);
    console.log(result);
}