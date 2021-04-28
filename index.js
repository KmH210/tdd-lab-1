function translate(word) {
    //convert each word to lowercase before translating
    console.log(word);
    word = word.toLowerCase();
    const vowels = /[aeiou]/;
    //If a word starts with a vowel, 
    //just add “way” onto the ending.
    if (word[0].match(vowels)) {
        return `${word}way`;
    } else {
        let vowelFound = vowels.exec(word);
        console.log(vowelFound.index);
        return word.slice(vowelFound.index) + word.slice(0, vowelFound.index) + 'ay';
    }
}

module.exports.translate = translate;