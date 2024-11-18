
 const alphabetValues = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4,
    'E': 5, 'F': 6, 'G': 7, 'H': 8,
    'I': 9, 'J': 10,'K':11,'L':12,
    'M':13,'N':14,'O':15,'P':16,
    'Q':17,'R':18,'S':19,'T':20,
    'U':21,'V':22,'W':23,'X':24,
    'Y':25,'Z':26
};

const inputElement = document.getElementById('inputdata');
const clickButton = document.getElementById('on');
const totalSumElement = document.getElementById('totalsum');

clickButton.addEventListener('click', () => {
    const inputText = inputElement.value.toUpperCase();
    let sum = 0;

    for (let char of inputText) {
        if (alphabetValues[char]) {
            sum += alphabetValues[char];
        }
    }

    totalSumElement.textContent = sum;
});