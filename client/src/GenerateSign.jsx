import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { utf8ToBytes } from "ethereum-cryptography/utils.js";
import { keccak256 } from "ethereum-cryptography/keccak.js";
import { useState } from "react";
import { Buffer } from "buffer";
function GenerateSign() {
  const [priveteKey, setPrivateKey] = useState("");
  const [signature, setSignature] = useState("");
  async function generateSign(evt) {
    const priveteKey = evt.target.value;
    setPrivateKey(evt.target.value);
    const privateKey = Uint8Array.from(Buffer.from(priveteKey, "hex"));
    const msg = "hello";
    const hashMsg = keccak256(utf8ToBytes(msg));
    const signature = secp256k1.sign(hashMsg, privateKey);
    const sigHex = signature.toDERHex();
    setSignature(sigHex);
  }
  return (
    <form className="container signature">
      <h1>Generate Signature</h1>

      <label>
        Private Key
        <input
          value={priveteKey}
          onChange={generateSign}
          placeholder="signature with message 'hello'"
        ></input>
      </label>

      <label>
        Signature Hex
        <input
          value={signature}
          disabled
          placeholder="Type an address, for example: 0x2"
        ></input>
      </label>

    </form>
  );
}
export default GenerateSign;
