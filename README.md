# Anagrams Finder

An anagram is a word formed by rearranging the letters of a different word, using all the original letters exactly once. A word is not an anagram of itself.

The Anagrams Finder API solves the following problems:
* checks if two given words are anagrams or not
* finds all the unique anagrams in a given sentence for a given word
* finds all unique anagram groups within a given sentence

## Prerequisites
Download [Node.js v16.16.0 and npm 8.11.0](https://nodejs.org/en/download/).

[Postman](https://www.postman.com) for testing.


## Built with
Javascript, Node.js

## Components
* routes: map URLs to validator and to controller methods.
* validators: check the validity of the input data, build a corresponding response when the data is invalid.
* controllers: handle the request and build response from it.
* services: solve all three anagram problems.

### Component Diagram
![component-diagram](https://user-images.githubusercontent.com/37733014/181372416-a5660679-c4de-4542-bebb-346a335ed76d.jpg)


## Available POST endpoints

### Run it online

#### Endpoint A: 
* URL: https://anagrams-finder.herokuapp.com/two-words-anagrams
* body request parameters: "word1" and "word2"
* Postman example:![heroku-two-words-anagrams](https://user-images.githubusercontent.com/37733014/181491677-483fbb55-9391-4835-a280-758cc00bd8e0.png)


	
#### Endpoint B: 
* URL: https://anagrams-finder.herokuapp.com/word-sentence-unique-anagrams		
* body request parameters: "word" and "sentence"
* Postman example:![heroku-word-sentence-unique-anagrams](https://user-images.githubusercontent.com/37733014/181490469-c96737cb-52a4-4daf-87ba-4ac60668738d.png)


#### Endpoint C:
* URL: https://anagrams-finder.herokuapp.com/unique-anagrams-in-sentence 
* body request parameters: "sentence"
* Postman example:![heroku-unique-anagrams-in-sentence](https://user-images.githubusercontent.com/37733014/181491583-14e58836-98d7-45f4-9903-1a13bfedc4b1.png)



### Run it locally
* the **PORT** number is **4433**.

#### Installing
* download the source code from git repository.
* open a command prompt in the /folder/with/downloaded/files.
* run the following commands in command prompt: *npm install; npm start*.


#### Endpoint A: 
* URL: http://localhost:4433/two-words-anagrams
* body request parameters: "word1" and "word2"
* Postman example:![heroku-two-words-anagrams](https://user-images.githubusercontent.com/37733014/181491296-7c6167fc-6216-4216-9e41-d068d88b4e78.png)

	
#### Endpoint B: 
* URL: http://localhost:4433/word-sentence-unique-anagrams		
* body request parameters: "word" and "sentence"
* Postman example:![word-sentence-unique-anagrams](https://user-images.githubusercontent.com/37733014/181490549-98d9e182-007c-42f6-8b26-d0a03fcc5851.png)


#### Endpoint C:
* URL: http://localhost:4433/unique-anagrams-in-sentence 
* body request parameters: "sentence"
* Postman example:![heroku-unique-anagrams-in-sentence](https://user-images.githubusercontent.com/37733014/181491327-97a37e64-ad59-44ef-adbc-488ae4cff0e1.png)




##  Author
Kőszegi György
