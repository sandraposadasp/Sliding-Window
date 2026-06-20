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

