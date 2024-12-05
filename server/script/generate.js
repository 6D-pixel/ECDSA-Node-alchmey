import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { toHex } from "ethereum-cryptography/utils.js";
import { keccak256 } from "ethereum-cryptography/keccak.js";

function main() {
  const privateKey = secp256k1.utils.randomPrivateKey();
  console.log("privateKey: " + toHex(privateKey));
  generatePublicKey(privateKey);
}
function generatePublicKey(privateKey) {
  const publicKey = secp256k1.getPublicKey(privateKey);
  const hashAddress = keccak256(publicKey.slice(1)).slice(-20);
  const address = toHex(hashAddress);
  console.log("Address: " + "0x" + address);
}
main();
