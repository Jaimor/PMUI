import Constant from './constant.js';
export default {
  generateRandomStr(len) {
    const seedStrLength = Constant.seedLetterNumber.length;
    let result = "";
    while (len > 0) {
      let i = Math.floor(Math.random() * (seedStrLength + 1));
      result += Constant.seedLetterNumber.charAt(i);
      len--;
    }
    return result;
  }
}
