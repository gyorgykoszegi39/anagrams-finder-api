# Anagrams Finder

## Prerequisites
Download Node.js v16.16.0 and npm 8.11.0.

## Installing
* download the source code from git repository.
* open a command prompt in the /folder/with/downloaded/files.
* run the following commands in command prompt: *npm install; npm start*.

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

* the **PORT** number is **4433**.

#### Endpoint A: 
* URL: http://localhost:4433/two-words-anagrams
* body request parameters: "word1" and "word2"
* Postman example:![two-words-anagrams](https://user-images.githubusercontent.com/37733014/181358347-32bc18c4-8a95-496a-a3fb-f5f3803d481d.png)

	
#### Endpoint B: 
* URL: http://localhost:4433/word-sentence-unique-anagrams		
* body request parameters: "word" and "sentence"
* Postman example:![word-sentence-unique-anagrams](https://user-images.githubusercontent.com/37733014/181375565-ad9e8f2c-bed4-4d1c-b216-7170117e31aa.png)



#### Endpoint C:
* URL: http://localhost:4433/unique-anagrams-in-sentence 
* body request parameters: "sentence"
* Postman example:![unique-anagrams-in-sentence](https://user-images.githubusercontent.com/37733014/181375575-2441bf37-b76b-4732-afcb-946bba55a0de.png)



##  Author
Kőszegi György
