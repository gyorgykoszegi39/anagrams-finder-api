containsTwoWords = (request, response, next) =>{
    var word1 = request.body.word1;
    var word2 = request.body.word2;

    if(typeof word1 == "undefined") {
        return response.status(400).send("Please fill in the first word using key word1 in the body of the request. (For example: word1 : **yourWord**)");
    }

    if(word1 == null || word1.length == 0) {
        return response.status(400).send("Please fill in the first word.");
    }

    if(typeof word2 == "undefined") {
        return response.status(400).send("Please fill in the second word using key word2 in the body of the request. (For example: word2 : **yourWord**)");
    }

    if(word2 == null || word2.length == 0) {
        return response.status(400).send("Please fill in the second word.");
    }

    next();
};

containsWordSentence = (request, response, next) =>{
    var word = request.body.word;
    var sentence = request.body.sentence;

    if(typeof word == "undefined") {
        return response.status(400).send("Please fill in the first word using key word in the body of the request. (For example: word : **yourWord**)");
    }

    if(word == null || word.length == 0) {
        return response.status(400).send("Please fill in the first word.");
    }

    if(typeof sentence == "undefined") {
        return response.status(400).send("Please enter a sentence using key sentence in the body of the request. (For example: sentence : **Your sentence.**)");
    }

    if(sentence == null || sentence.length == 0) {
        return response.status(400).send("Please enter a sentence.");
    }

    next();
};
module.exports = {containsTwoWords, containsWordSentence}