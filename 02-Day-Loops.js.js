function vowelsAndConsonants(s) {
    
    const consonants = [];
    const vowels = [];
    for (const char of s ){
        const convertToLowerCaseLetters = char.toLowerCase();
        
        if('aeiou'.includes(convertToLowerCaseLetters)){
            vowels.push(char);
        }
        else if('bcdfghjklmnpqrstvwxyz'.includes(convertToLowerCaseLetters)){
            consonants.push(char);
        }
        
    }
    
    for (const vowel of vowels){
        console.log(vowel);
    }
    for(const consonant of consonants){
        console.log(consonant);
    }
}

const s = "Hello";
vowelsAndConsonants(s);