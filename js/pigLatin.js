const SUFFIX = "ay"
const vowels = "aeiou".split('');
const list_of_consonant_clusters = [
        "thr",
        "th",
        "squ",
        "sh",
        "sch",
        "qu",
        "ch",
        "br",
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
/*
This style of solving the problem allows us to iterate 
*/
exports.translate = function(given_word) {
    const wordsInWord = given_word.split(' ');
    let shouldCaseOutput = false;
    let output = "";
    for (let i = 0; i < wordsInWord.length; i++) {
        let word = wordsInWord[i];
        // We essentially just loop to find the answer
        if (isUppercase(wordsInWord[0])) {
            shouldCaseOutput = true;
            word = word.toLowerCase();
        }
        const vowel = tryToFindVowel(word);
        output += vowel;
        const cluster = vowel == "" ? findConsonantCluster(word) : "";
        output += cluster;
        output += " ";
    }
    if (shouldCaseOutput) {
        console.log("YA?", output.charAt(0));
        output = output.charAt(0).toUpperCase() + output.slice(1);
    }
    console.log(output);
    return output.trim();
};

function tryToFindVowel(word) {
    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j];
        if (vowel == word[0]) {
            return word + SUFFIX;
        }
    }
    return "";
}

function findConsonantCluster(word) {
    for (let i = 0; i < list_of_consonant_clusters.length; i++) {
        const cluster = list_of_consonant_clusters[i];
        wordCluster = word.substr(0, cluster.length);
        postCluster = word.substring(cluster.length);
        if (wordCluster == cluster) {
            return postCluster + wordCluster + SUFFIX;
        }
    }
    return "";
}

function isUppercase(word){
    return /^\p{Lu}/u.test(word);
  }
