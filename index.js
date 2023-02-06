require('dotenv').config();

const AntiDegenBot = require("./structs/AntiDegenBot");
const client = new AntiDegenBot();

client.init();

module.exports = client;