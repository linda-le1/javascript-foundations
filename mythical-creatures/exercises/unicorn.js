class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }
  isWhite() {
    if (this.color != 'white') {
      return false;
    }
  }
  says(saying) {
    var str_1 = "**;* "
    var str_2 = saying
    var str_3 = " *;**"
    return str_1.concat(str_2, str_3);
  }
}



module.exports = Unicorn;
