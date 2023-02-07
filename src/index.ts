import dotenv from 'dotenv';
import { AntiDegenBot } from './main/AntiDegenBot';

dotenv.config();
const client : AntiDegenBot = new AntiDegenBot();

client.init();

module.exports = client;