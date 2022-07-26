const express = require('express');
const router = express.Router();
const anagramsFinderValidators = require('../validators/anagrams-finder.validators');
const anagramsFinderControllers = require('../controllers/anagrams-finder.controllers');

router.post('/two-words-anagrams', anagramsFinderValidators.containsTwoWords, anagramsFinderControllers.twoWordsAnagram);
router.post('/unique-anagrams-in-sentence', anagramsFinderValidators.containsSentence, anagramsFinderControllers.uniqueAnagramsInSentence);
router.post('/word-sentence-unique-anagrams', anagramsFinderValidators.containsWordSentence, anagramsFinderControllers.wordSentenceUniqueAnagrams);

module.exports = router;