import Utf8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';

const EncryptionService = class {
  secureKey: string = '123456789';

  public encrypt(value: string) {
    return AES.encrypt(value, this.secureKey).toString();
  }

  public decrypt(value: string) {
    try {
      var bytes = AES.decrypt(value, this.secureKey);
      return bytes.toString(Utf8) || null;
    } catch (ex) {
      return null;
    }
  }
};
const Encryption = new EncryptionService();

export default Encryption;
