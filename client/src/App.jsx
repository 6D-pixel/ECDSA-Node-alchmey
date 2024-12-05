import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";
import GenerateSign from "./GenerateSign";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [signature, setSignature] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        signatureHex={signature}
        setSignature={setSignature}
      />
      <Transfer setBalance={setBalance} address={address} />
      <GenerateSign />
    </div>
  );
}

export default App;
