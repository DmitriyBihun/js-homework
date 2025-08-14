if (confirm('Почати тестування?')) {

    let tempArray =[];
    let numbersOfTemp = parseFloat(prompt(`Введіть к-сть температур:`, '5'));

    for (let i = 1; i <= numbersOfTemp; i++) {
        let temp = parseFloat(prompt(`Введіть ${i} температуру:`, '20.5'));
        tempArray.push(temp)
    }

    function getNegativeNumb(tempList) {
        let negativeTempNumb = 0;
        for (let i = 0; i < tempList.length; i++) {
            if (tempList[i] < 0) {
                negativeTempNumb++
            }
        }
        return negativeTempNumb
    }

    const tempNegativeCount = getNegativeNumb(tempArray)

    document.write(`К-сть температур з негативним значенням  = ${tempNegativeCount}`)
} 

/*
if (confirm('Почати тестування?')) {

    function getNegativeNumb(tempList) {
        let negativeTempNumb = 0;
        for (let i = 0; i < tempList.length; i++) {
            if (tempList[i] < 0) {
                negativeTempNumb++
            }
        }
        return negativeTempNumb
    }

    let tempArray = [10, 14, -8, -1, -160, 0, 22]
    const tempNegativeCount = getNegativeNumb(tempArray)

    document.write(`К-сть негативних значень температури = ${tempNegativeCount}`)
} 
*/
