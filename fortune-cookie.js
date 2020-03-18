const fortunes = require("fortune-cookie");

class FortuneCookie {

  constructor() {
    this.nfortunes = fortunes.length;

    this.pickOne = function() {
      return Math.floor(Math.random() * this.nfortunes);
    }
  }

  get() {
    let n = this.pickOne();
    return fortunes[n];
  }
}

module.exports = FortuneCookie;
