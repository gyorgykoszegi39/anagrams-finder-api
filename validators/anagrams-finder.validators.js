containsTwoWords = (req, res, next) =>{
    var word1 = req.body.word1;
    var word2 = req.body.word2;


    if(typeof word1 == "undefined") {
        return res.status(400).send("Please fill in the first word using key word1. (For example: word1 : **yourWord**)");
    }

    if(word1 == null || word1.length == 0) {
        return res.status(400).send("Please fill in the first word.");
    }

    if(typeof word2 == "undefined") {
        return res.status(400).send("Please fill in the first word using key word2. (For example: word2 : **yourWord**)");
    }

    if(word2.length == 0) {
        return res.status(400).send("Please fill in the second word.");
    }

    next();
};

module.exports = {containsTwoWords}