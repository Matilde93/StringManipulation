Vue.createApp({
    data(){
        return {
            word: null,
            words: [],
            result: []
        }
    }, methods: {
        reverseString(word) {
            return word.split("").reverse().join("");
        },
        save(word){
            this.word = word;
            this.words.push(word)
            this.words.push(word.toUpperCase())
            this.words.push(word.toLowerCase())
            this.words.push(word.charAt(0).toUpperCase() + word.slice(1))
            this.words.push(word.slice(0,word.length-1) + word.charAt(word.length-1).toUpperCase())
            this.words.push(this.reverseString(word))

            this.result = this.words
            this.words = [];
        },
        
    }
}).mount ("#app")