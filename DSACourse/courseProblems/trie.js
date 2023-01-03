class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      let char = word[index];
      let subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }

  findWord(word, index = 0) {
    // This function will return the node in the trie
    // which corresponds to the end of the passed in word.

    // Be sure to consider what happens if the word is not in this Trie.

    var char = word[index];
    if (index < word.length - 1 && this.characters[char]) {
      index += 1;
      return this.characters[char].findWord(word, index);
    } else {
      return this.characters[char];
    }
  }

  getWords(words = [], currentWord = "") {
    // This function will return all the words which are
    // contained in this Trie.
    // it will use currentWord as a prefix,
    // since a Trie doesn't know about its parents.

    if (this.isWord) {
      words.push(currentWord);
    }
    for (var char in this.characters) {
      var nextWord = currentWord + char;
      this.characters[char].getWords(words, nextWord);
    }
    return words;
  }

  removeWord(word) {
    if (word[0] === undefined) {
      this.isWord = false;
      return this
    } else if (Object.keys(this.characters[word[0]].characters).length === 1) {
      this.isWord = false;
      delete this.characters[word[0]];
    } else if (Object.keys(this.characters[word[0]].characters).length > 1) {
      let subTrie = this.characters[word[0]];
      subTrie.removeWord(word.substr(1));
    }
    return this;
  }

  autoComplete(prefix) {
    // This function will return all completions
    // for a given prefix.
    // It should use find and getWords.

    // return this.findWord(prefix);
    var subTrie = this.findWord(prefix);
    if (subTrie) {
      return subTrie.getWords([], prefix);
    } else {
      return [];
    }
  }

}

// var firstTrie = new Trie();
// firstTrie.addWord("fun");
// console.log(firstTrie.characters) // {f: Trie}
// console.log(!!firstTrie.characters["f"]) // true
// console.log(firstTrie.characters.f.characters.u) // {u: Trie}
// console.log(!!firstTrie.characters.f.characters.u) // true
// console.log(firstTrie.characters.f.characters.u.characters.n.isWord) // true
// console.log(!!firstTrie.characters.f.characters.u.characters.n) // true
// console.log(!!firstTrie.characters.f.characters.u.characters.n.characters) // {}
// console.log(!!firstTrie.characters.f.characters.u.characters.l) // false

// var secondTrie = new Trie();
// secondTrie.addWord("ha")
// secondTrie.addWord("hat")
// secondTrie.addWord("has")
// secondTrie.addWord("have")
// secondTrie.addWord("hate")

// console.log(secondTrie.characters.h.characters.a.isWord) // true
// console.log(secondTrie.characters.h.characters.a.characters.t.isWord) // true
// console.log(secondTrie.characters.h.characters.a.characters.v.isWord) // false
// console.log(secondTrie.characters.h.characters.a.characters.v.characters.e.isWord) // true
// console.log(secondTrie.characters.h.characters.a.characters.t.characters.e.isWord) // true
// console.log(Object.keys(secondTrie.characters.h.characters.a.characters).length);

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')
// t.removeWord('fat')
// console.log(t.characters.f.characters.a.characters.t.isWord) // false
// console.log(t.characters.f.characters.a.characters.t.characters.e.isWord) // true
// t.removeWord('argue')
// console.log(t.characters.a.characters.r) // undefined
// console.log(t.findWord('taco')) // undefined
// console.log(t.findWord('fat').characters) // {t: Trie}
// console.log(t.findWord('father').characters) // {}
// console.log(t.findWord('father').isWord) // true
// console.log(t.getWords()) // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]
// console.log(t.getWords().length) // 8
console.log(t.autoComplete('fa')) // ["fast","fat", "fate", "father"] 
console.log(t.autoComplete('a')) // ["awesome", "argue"]
console.log(t.autoComplete('arz')) // []