const {isAnagram, findAllUniqueAnagrams, findAllUniqueAnagramsGivenWord} = require('../services/anagrams-finder.services');

twoWordsAnagram = function(request, response) {
    try {
        response.status(200).send({"outcome" : isAnagram(request.body.word1, request.body.word2)});
    } catch(error) {
        response.status(400).send("Some error occurred. Please try again!")
    }
};

wordSentenceUniqueAnagrams = function(request, response) {
    try {
        response.status(200).send({"outcome" : findAllUniqueAnagramsGivenWord(request.body.word, request.body.sentence)});
    } catch(error) {
        response.status(400).send("Some error occurred. Please try again!")
    }
};

uniqueAnagramsInSentence = function(request, response) {
    try {
        response.status(200).send({"outcome" : findAllUniqueAnagrams(request.body.sentence)});
    } catch(error) {
        response.status(400).send("Some error occurred. Please try again!")
    }
};

module.exports = {twoWordsAnagram, wordSentenceUniqueAnagrams, uniqueAnagramsInSentence}