const {isAnagram} = require('../services/anagrams-finder.services');

twoWordsAnagram = function(request, response) {
    try {
        response.status(200).send({"outcome" : isAnagram(request.body.word1, request.body.word2)});
    }
    catch(error) {
        response.status(400).send("Some error occurred. Please try again!")
    }
};

uniqueAnagramsInSenetence = function(request, response) {
    try {
        response.status(200).send({"outcome" : findAllUniqueAnagrams(request.body.sentence)});
    }
    catch(error) {
        response.status(400).send("Some error occurred. Please try again!")
    }
};

module.exports = {twoWordsAnagram, uniqueAnagramsInSenetence}