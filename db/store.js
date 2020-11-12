const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    constructor() {
      this.lastId = 0;
    }
  
    read() {
      return readFileAsync("db/db.json", "utf8");
    }
  
    write(note) {
      return writeFileAsync("db/db.json", JSON.stringify(note));
    }
  
}