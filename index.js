Vue.createApp({
  data() {
    return {
      word: "",
      words: [],
      error: "",
    };
  },
  methods: {
    reverseString(word) {
      return word.split("").reverse().join("");
    },
    save(word) {
      if (word == null || word.trim().length === 0 || word == "") {
        this.error = "Please enter a word";
        this.words = [];
      } else {
        this.error = "";
        this.words[0] = word;
        this.words[1] = word.toUpperCase();
        this.words[2] = word.toLowerCase();
        this.words[3] = word[0].toUpperCase() + word.slice(1);
        this.words[4] =
          word.slice(0, word.length - 1) +
          word.charAt(word.length - 1).toUpperCase();
        this.words[5] = this.reverseString(word);
      }
    },
  },
}).mount("#app");
