class VigenereCipheringMachine {
  constructor(name) {
    if (name === undefined) {
      name = true;
    }

    this.machineIsDirect = name;
    this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error;
    }

    let encryptedTextArray = [];
    let keyIndexCounter = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.ALPHABET.includes(message[i].toUpperCase())) {
        let indexOfPlaintextLetter = this.ALPHABET.indexOf(message[i].toUpperCase());
        let indexOfKeyLetter = this.ALPHABET.indexOf(key[keyIndexCounter % key.length].toUpperCase());
        let encryptedLetter = this.ALPHABET[((indexOfPlaintextLetter + indexOfKeyLetter) % this.ALPHABET.length)];
        encryptedTextArray.push(encryptedLetter);
        keyIndexCounter++;
      } else {
        encryptedTextArray.push(message[i]);
      }
    }

    return (this.machineIsDirect) ? encryptedTextArray.join('') : encryptedTextArray.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error;
    }

    let decryptedTextArray = [];
    let keyIndexCounter = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.ALPHABET.includes(encryptedMessage[i].toUpperCase())) {
        let indexOfEncryptedLetter = this.ALPHABET.indexOf(encryptedMessage[i].toUpperCase());
        let indexOfKeyLetter = this.ALPHABET.indexOf(key[keyIndexCounter % key.length].toUpperCase());
        let decryptedLetter = this.ALPHABET[(indexOfEncryptedLetter - indexOfKeyLetter + this.ALPHABET.length) % this.ALPHABET.length];
        decryptedTextArray.push(decryptedLetter);
        keyIndexCounter++;
      } else {
        decryptedTextArray.push(encryptedMessage[i]);
      }
    }

    return (this.machineIsDirect) ? decryptedTextArray.join('') : decryptedTextArray.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;