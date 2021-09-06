import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
const uwu_abi = require("../contracts/uwucrew.json");
const Web3 = require("web3");

// Production
const UWU_CONTRACT = "0xF75140376D246D8B1E5B8a48E3f00772468b3c0c";
const URL = `https://mainnet.infura.io/v3/48cba79f8c2b4d80af39d9983bf188a2`;

// Rinkeby
// const UWU_CONTRACT = "0x64d7F507f3635ea5DFdD9FDec1f2fa3CbF66b7fb";
// const URL = `https://rinkeby.infura.io/v3/48cba79f8c2b4d80af39d9983bf188a2`;

const defaultUwu = () => {
  return {
    image: "https://uwucrew.art/pre-reveal.mp4",
  };
};

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
const main = express();

app.use(cors({ origin: true }));
main.use("/api", app);
main.use(bodyParser.json());

export const webApi = functions.https.onRequest(main);

app.get("/uwu/:id", async (request: any, response: any) => {
  try {
    const id = request.params.id;
    if (!id) throw new Error("Uwu ID is required");

    const provider = new Web3.providers.HttpProvider(URL);
    const web3 = new Web3(provider);

    // Checking if Minted
    if (Number.parseInt(id) > 7_600) {
      const uwu_contract = new web3.eth.Contract(uwu_abi, UWU_CONTRACT);
      const supply = await uwu_contract.methods.totalSupply().call();
      if (Number.parseInt(id) + 1 > supply) return response.json(defaultUwu());
    }

    // Getting uwu
    let moodQuerySnapshot = await db
      .collection("uwus")
      .where("id", "==", Number.parseInt(id))
      .get();

    // 404 handling
    if (moodQuerySnapshot.empty)
      return response.status(404).send("Uwu Not Found");

    return response.json(moodQuerySnapshot.docs[0].data());
  } catch (error) {
    console.log(error);
    return response.status(500).send(error);
  }
});

// app.post("/uwus", async (request: any, response: any) => {
//   try {
//     const { attributes, id, description, image, name } = request.body;
//     const data = {
//       id,
//       image: `https://firebasestorage.googleapis.com/v0/b/uwucrew-3563e/o/${image}.png?alt=media`,
//       attributes,
//       description,
//       name,
//     };
//     await db.collection("uwus").add(data);
//     return response.status(200).send("Uwu Uploaded");
//   } catch (error) {
//     console.log(error);
//     return response.status(500).send(error);
//   }
// });

app.put("/uwu/:id", async (request, response) => {
  try {
    const id = request.params.id;
    if (!id) throw new Error("id is blank");

    const { token, image } = request.body;

    if (token !== "0x697eff529cc1b411053fd67df536fde159d1a56a")
      return response.status(403).send("Forbidden");

    const data = {
      image: `https://firebasestorage.googleapis.com/v0/b/uwucrew-3563e/o/${image}.png?alt=media`,
    };

    const moodQuerySnapshot = await db
      .collection("uwus")
      .where("id", "==", Number.parseInt(id))
      .get();

    if (moodQuerySnapshot.empty)
      return response.status(404).send("Uwu Not Found");

    const dbId = moodQuerySnapshot.docs[0].id;
    await db.collection("uwus").doc(dbId).set(data, { merge: true });

    return response.json({
      id,
      data,
    });
  } catch (error) {
    return response.status(500).send(error);
  }
});

export const moodsUpdateV1 = app;
