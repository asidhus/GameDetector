##How to run test
○ Run npm install to get node modules and npm test to run test script

##Information
○ The main function run is found in the gamedetector class called detect

○ The custom trie data structure is located in trieDS.js

##Runtime and Decisions ETC


○ At first I thought of the naive solution of continuously checking all the grams against each word in a string. This would require to go through each word in the string then compare it to all the beginning words of each gram. If matched then grab the next word in the specific gram and see if it matches or if its the end. This would require less space but would have been extremely time inefficient.

○ So what I decided to do was reverse map the grams to the game but it was not so simple. Because some grams would be more than just one word. To solve this I decided to use a custom trie Data Structure that would store the reverse mapping. For example “the last destiny game” would have 4 nodes where “the” would link to “last” and etc. “Game” would be the last node and it would signal that it’s the ending of a gram. By doing this it allowed constant lookup on each word throughout the string and not bother with the unnecessary words. The root trie contains all the beginning words of a gram. This was much more time efficient but required space unlike the naive solution I had thought of. The runtime of the trie to add one gram is n which is the amount of words in the gram separated by spaces. The lookup of a gram is also n which is the amount of words in the gram separated by spaces. To find tags in a string is ln. l which is the words in a string separated by spaces. The runtime of finding tags is O(ln).

##Things to improve on
○ One simple thing I did not have enough time to complete was to take into fact that grams could end with commas, periods, and question marks. I started with the commas and was almost done with that. I know what I needed to do just did not have enough time on my hands this week to finish that as well.

##Instructions

○ Choose a language among Ruby, Python and Javascript.

○ Implement what is requested.

○ Write tests to validate your implementation.
○ Send your work in a compressed archive containing implementation file, test file, and
whatever comments/notes helped you solve the problem.

○ Please complete your work on time and do not worry if you can’t get everything perfect.
###Input
○ A large mapping from a game id to a list of possible n-grams used to refer to the game,
for example:

`{
"CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD"],
"Fortnite": ["Fortnite", "Fort Nite"],
"Destiny": ["Destiny", "original Destiny game"],
"Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
"WorldOfWarcraft": ["WoW the game", "world of warcraft"],
...
}`

○ A very large body of documents in the form of an array of strings, for example:

`["I liked the last Destiny game, now I play Fortnite",
"Lol, no comment about that",
...,
"I'm still playing world of warcraft since ww2"]`

###Output
The documents with tagged games (see example)

`["I liked TAG{Destiny2,the last Destiny game}, now I play TAG{Fortnite,Fortnite}",
"Lol, no comment about that",
...,
"I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2"]`

####Note
A recognized sequence of words, e.g. “Call of Duty world war two”, identified to refer to a certain
game id, e.g. “CallOfDutyWW2”, must be represented in the final text as TAG{GameID,original
text}, e.g. TAG{CallOfDutyWW2,Call of Duty world war two}.
Extra points
Comment on the running time of your implementation.

