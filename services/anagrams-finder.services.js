removeNonAlphabeticCharsExceptSpace = (word) => {
    word = word.replace(/[^a-zA-Z\s]/g, ""); // remove all chars except space and aplhabet characthers
    word = word.replace(/\s+/g, " ").trim(); // remove extra spaces from the beginning/middle/end
    word = word.toLowerCase();

    return word;
};

sortWordByChars = (word) => {
    const CHAR_CODE_OF_A = 97; // 97 = 'a'
    const NUMBER_OF_CHARS = 26; //English alphabet
    charsFrequency = new Array(NUMBER_OF_CHARS);

    for(var i = 0; i < charsFrequency.length; i++) {
        charsFrequency[i] = 0;
    }

    for (var i = 0; i < word.length; i++) {
        charsFrequency[word.charCodeAt(i) - CHAR_CODE_OF_A]++;
    }

    sortedWord = ""
    for (var i = 0; i < charsFrequency.length; i++) {
        sortedWord += String.fromCharCode(CHAR_CODE_OF_A + i).repeat(charsFrequency[i]);
    }
    return sortedWord;
}

isAnagram = (word1, word2) => {
    if(word1.length != word2.length)
        return false;

    if(word1 == word2)
        return false;

    return sortWordByChars(word1) == sortWordByChars(word2);
};

findAllUniqueAnagramsGivenWord = (word, sentence) => {
    anagramsSet = new Set();
    anagramsSet.add(word);

    sentence.split(" ").forEach(sentenceWord => {

        if(isAnagram(word, sentenceWord)) {
            anagramsSet.add(sentenceWord);
        }
    });

    if(anagramsSet.size == 1) {
        return [];
    }

    return Array.from(anagramsSet);
};

findAllUniqueAnagrams = (sentence) => {
    wordHashMap = new Map();

    sentence.split(" ").forEach(word => {

        sortedWord = sortWordByChars(word);
        if(!wordHashMap.has(sortedWord)) {
            wordHashMap.set(sortedWord, new Set());
        }
            
        wordHashMap.set(sortedWord, wordHashMap.get(sortedWord).add(word));
    });

    uniqueAnagrams = [];
    for(const value of wordHashMap.values()) {
        if(value.size > 1) {
            uniqueAnagrams.push(Array.from(value));
        }
    }

    return uniqueAnagrams;
};


module.exports = {removeNonAlphabeticCharsExceptSpace, isAnagram, findAllUniqueAnagramsGivenWord, findAllUniqueAnagrams}