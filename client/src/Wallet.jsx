import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils.js";
import { keccak256 } from "ethereum-cryptography/keccak.js";
function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  signatureHex,
  setSignature,
}) {
  async function onChange(evt) {
    const signatureHex = evt.target.value;
    setSignature(signatureHex);
    //derive address form signature (verify signature)
    const ogSig = secp256k1.Signature.fromDER(signatureHex);
    ogSig.recovery = 0;
    const msg = "hello";
    const hashMsg = keccak256(utf8ToBytes(msg));
    const signature = ogSig;
    const publicKey = signature.recoverPublicKey(hashMsg).toRawBytes();
    const hashAddress = keccak256(publicKey.slice(1)).slice(-20);
    const address = "0x" + toHex(hashAddress);
    console.log("Address: " + address);
    setAddress(address);

    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Signature Hex
        <input
          placeholder="Input Signature in Hex"
          value={signatureHex}
          onChange={onChange}
        ></input>
      </label>
      <label>
        Your Address
        <input
          placeholder="Type an address, for example: 0x1"
          value={address}
          disabled
        ></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
