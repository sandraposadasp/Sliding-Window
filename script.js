//Algoritmo

function findLongestWord(text) {

    let words = text.split(" ");
    let longestWord = ''; 

     for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const text = "El software es una gran combinación entre arte e ingeniería. Bill Gates";

console.log(findLongestWord(text)); // Resultado esperado: combinación