//Setting up each individual trie Node
function Node(word) {
  //keep track of what word is in the trie node
  this.word = word;
  // Game title of the gram
  this.title = undefined;
  // if this is the last word of a string (indicating that we located a gram)
  this.isGram = false;
  // grams that have more than one word are linked to gether using an object
  this.children = {};
}

function Trie() {
  //keep track of the root node
  this.root = new Node('');
}

Trie.prototype.add = function(gram_array) {
  // Make sure that the root was instantiated
  if(!this.root) {
    return null;
  }
  //then add the gram(broken up into an array) to the trie 
  this._addNode(this.root, gram_array, 0);
};

Trie.prototype._addNode = function(node, gram_array, index) {
  //If node is undefined or we are done adding all items of an array to the trie return null
  if(!node || index >= gram_array.length-1) {
    return null;
  }
  // grab the word
  var word = gram_array[index];
  // check to make sure if the word is already in the trie if not add a new node 
  var child = node.children[word];
  if(!child) {
    child = new Node(word);
    node.children[word] = child;
  }
  // if we are at the second to last elemnt of the array 
  // add the title(last element) to the node and make sure to set isGram to true
  if(gram_array.length - 2 === index) {
    child.isGram = true;
    child.title = gram_array[index + 1];
  }
  //increment the indec counter
  index = index + 1;
  //recursively call trie addnode
  this._addNode(child, gram_array, index);
};
//export out DataStructure
module.exports = Trie;
