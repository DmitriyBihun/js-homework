if (confirm('Почати тестування?')) {
    
    function generateGrades(count) {
        let grades = [];
        for (let i = 0; i < count; i++) {
            grades.push(2 + Math.floor(Math.random() * 4)); 
        }
        return grades;
    }

    function calculateAverage(grades) {
        let sum = 0;

        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        let average = sum / grades.length;
        return average;
    }

    function determineCategory(grades) {
        let hasTwo = false;
        let hasThree = false;
        let hasFour = false;

        for (let i = 0; i < grades.length; i++) {
            if (grades[i] === 2) {
                hasTwo = true
            }
            else if (grades[i] === 3) {
                hasThree = true
            }
            else if (grades[i] === 4) {
                hasFour = true
            }
        }
        if (hasTwo) {
            return 'Двійочник'
        } else if (hasThree) {
            return 'Трійочник'
        } else if (hasFour) {
            return 'Хорошист'
        } else {
            return 'Відмінник'
        }
    }
    const arrayOfNumb = generateGrades(7);

    let category = determineCategory(arrayOfNumb)
    let averageNumber = calculateAverage(arrayOfNumb)

    document.write(`Оцінки: ${arrayOfNumb}<br>`);
    document.write(`Cередній бaл: ${averageNumber.toFixed(2)}<br>Категорія: ${category}`)
} 
