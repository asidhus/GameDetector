//Grab self created trie Data Structure
var Trie = require ('./trieDS.js');
//Setup trie DataStructure for further use and searching with Object of games given and trie
var addAllGramsToTrie = (obj, trie) => {
  //grab keys
  var keys = Object.keys(obj);
  //loop over keys
  for(var i of keys) {
    //loop over j-grams
    for(var j of obj[i]) {
      //make sure the grams are lowercase to be able to distinguish between words like 
      // Fortnite and fortnite or lAst Destiny GamE and last Destiny game
      j = j.toLowerCase(); 
      //split gram by spaces
      var x = j.split(' ');
      //push title onto array
      x.push(i);
      //add the gram to the trie
      trie.add(x);
    }
  }
};
// A base class is defined using the new reserved 'class' keyword
module.exports = class GameDetector {

  //Empty Constructor for now
  constructor() {
  }
  // main function used to detect all tags in a array of strings
  detect(games_object, array_strings) {

    // instantiate trie object
    const trie = new Trie();

    //Setup trie DataStructure for further use and searching with Object of games given
    addAllGramsToTrie(games_object, trie);

    // search through string and find tags
    var findTags = (string) => {
      //split the string into an array by spaces
      string = string.split(' ');
      //loop over string array
      for(var i = 0; i < string.length; i++) {
        //if any word maps to the main trie node check to see if its a vaild tag
        let word = string[i];
        word = word.toLowerCase();
        if(trie.root.children[word]) {
          //keep track of starting index
          var start = i;
          //set i to the end of a tag to make sure we dont do uneccasary checking
          i = check(string, i);
          // if check returns a null value than we move on to the next word
          if(i === null) {
            i = start;
          }
        }
      }
      //return the joined array with tags in place as a string
      return string.join(' ');
    };

    //Function takes an a array(string split by spaces) and its index and 
    //checks trie if the starting index value in the array matches to a gram given to us.
    var check = (array, index) => {
      // remember the beggining index
      var start = index;
      //bool value to check if the last variable of the string in a gram has a comma
      var comma = false;
      //grab the first node that maps to the array index
      //lowercase check 
      var word = array[index];
      word = word.toLowerCase();
      var node = trie.root.children[word];
      //here we keep looping through the children of a trie node till the child 
      //is a gram or index exceedes array length. (EX: the last Destiny game)
      while(!node.isGram && index < array.length) {
        //increment index
        index+=1;
        // temporarily store trie node just incase the last word has a comma in it
        var temp = node;
        // check if word maps to trie nodes child
        //lowercase check 
        word = array[index];
        word = word.toLowerCase();
        node = node.children[word];
        if(!node) {
          // Also check to make sure that if it does not map that there is no comma in the indexed word
          var checkComma = word.replace(/,/g , "");
          node = temp.children[checkComma];
          //if the indexed word is still not a node or a gram return null otherwise set comma boolean value to true
          if(node && node.isGram) {
            comma = true;
          } else {
            return null;
          }
        }
      }
      //mutate array by adding TAG{gametitle,  to the beggining work and a } to the end word
      //Check for comma as well
      if(node.isGram) {
        array[start] = 'TAG{'+ node.title + ',' + array[start];
        if(comma){
          array[index] = array[index].replace(/,/g , "") + '},';
        } else {
          array[index] = array[index] + '}';
        }
      }
      return index;
    };

    // clone the array strings to make sure we dont mutate the original
    var clone = array_strings.slice();
    // loop through the strings to look for tags
    for(var i = 0; i < clone.length; i++) {
      clone[i] = findTags(clone[i]);
    }
    //return the tag inserted strings
    return clone;
  }

}

