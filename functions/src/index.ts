import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
const abi = require("../contracts/uwucrew.json");
const Web3 = require("web3");

const UWU_CONTRACT = "0x1F64F0f5411c73B9323a788C314737E899553a98";

const defaultUwu = () => {
  return {
    image: "https://i.insider.com/5aa10ca0d877e618008b4678",
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

    const url = `https://rinkeby.infura.io/v3/1704ebb4fcf041619a8b00b00d8d9aa3`;
    const provider = new Web3.providers.HttpProvider(url);
    const web3 = new Web3(provider);
    const contract = new web3.eth.Contract(abi, UWU_CONTRACT);
    const supply = await contract.methods.totalSupply().call();
    if (id > supply) return defaultUwu();

    let moodQuerySnapshot = await db
      .collection("uwuws")
      .where("id", "==", Number.parseInt(id))
      .get();

    if (moodQuerySnapshot.empty)
      return response.status(404).send("Uwu Not Found");

    return response.json(moodQuerySnapshot.docs[0].data());
  } catch (error) {
    console.log(error);
    return response.status(500).send(error);
  }
});
