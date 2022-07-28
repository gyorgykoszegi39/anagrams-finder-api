const {removeNonAlphabeticCharsExceptSpace, isAnagram, findAllUniqueAnagrams, findAllUniqueAnagramsGivenWord} = require('../services/anagrams-finder.services');

twoWordsAnagram = function(request, response) {
    try {
        word1 = removeNonAlphabeticCharsExceptSpace(request.body.word1);
        word2 = removeNonAlphabeticCharsExceptSpace(request.body.word2);

        response.status(200).send({"outcome" : isAnagram(word1, word2)});
    } catch(error) {
        response.status(400).send("Some error occurred. Please try again!")
    }
};

wordSentenceUniqueAnagrams = function(request, response) {
    try {
        word = removeNonAlphabeticCharsExceptSpace(request.body.word);
        sentence = removeNonAlphabeticCharsExceptSpace(request.body.sentence);

        response.status(200).send({"outcome" : findAllUniqueAnagramsGivenWord(word, sentence)});
    } catch(error) {
        response.status(400).send("Some error occurred. Please try again!")
    }
};

uniqueAnagramsInSentence = function(request, response) {
    try {
        sentence = removeNonAlphabeticCharsExceptSpace(request.body.sentence);

        response.status(200).send({"outcome" : findAllUniqueAnagrams(sentence)});
    } catch(error) {
        response.status(400).send("Some error occurred. Please try again!")
    }
};

module.exports = {twoWordsAnagram, wordSentenceUniqueAnagrams, uniqueAnagramsInSentence}