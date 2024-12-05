## HOW TO USE
# Server side

- The client folder has example private keys in lib.js and the corresponding addresses is used in the index.js of the server folder
- use generate.js to generate new private keys

# Client side

- GenerateSign.jsx to generate a signature with the private key in the server folder
- the wallet addresses is derived from the signature in Wallet.jsx
- Input the payee address from the index.js in the server folder

PrivetKey and address used in this project

```
key1: "5e5fe668e1456428b83cdc267110829058543a66e1d1cc808955fd8f843ed26e"
Address1: "0x4981b1d34bd026fde8b445de55dbe3df74577471",

key2: "97c47cac6c71f4a7dc7cfa5470cc432f7dcf76b9bcaf97c4d0161e31a3b7ccb3"
Address2: "0xffb949ff757e1a97ec57ccebed7195b1af419cc0": 50,

key3: "e9d0831a5eaeef0d2abbfcffd42c5cedde2321c3ff61beb1024f78a5c68acb00"
Address3:"0xbd6483364d660cc05094695cc0d5dc6cf1ca2982": 75,
```

## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
````
