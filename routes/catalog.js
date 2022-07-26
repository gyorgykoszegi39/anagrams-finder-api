const express = require('express');
const router = express.Router();
const anagramsFinderValidators = require('../validators/anagrams-finder.validators');
const anagramsFinderControllers = require('../controllers/anagrams-finder.controllers');

router.post('/two-words-anagrams', anagramsFinderValidators.containsTwoWords, anagramsFinderControllers.twoWordsAnagram);
router.post('/word-sentence-unique-anagrams', anagramsFinderValidators.containsWordSentence, anagramsFinderControllers.wordSentenceUniqueAnagrams);

module.exports = router;