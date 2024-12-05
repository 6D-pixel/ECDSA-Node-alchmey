import express, { json } from "express";
const app = express();
import cors from "cors";
const port = 3042;

app.use(cors());
app.use(json());

const balances = {
  "0x4981b1d34bd026fde8b445de55dbe3df74577471": 100,
  "0xffb949ff757e1a97ec57ccebed7195b1af419cc0": 50,
  "0xbd6483364d660cc05094695cc0d5dc6cf1ca2982": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
