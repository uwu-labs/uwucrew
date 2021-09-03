import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
const abi = require("../contracts/uwucrew.json");
const Web3 = require("web3");

// TODO Rename images
// TODO Load images
// TODO setup database
// TODO Setup database schema
// TODO Add function to upload uwuws
// TODO Create database upload app
// TODO Load into database
// TODO setep return filter
// TODO Check Start time
// TODO Test
// TODO Add Kiwi to firebase
// TODO Show Kiwi how it works
// TODO Add vanity URL

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
    if (id > supply + 10_000) return response.json(defaultUwu());

    let moodQuerySnapshot = await db
      .collection("uwus")
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

app.post("/uwus", async (request: any, response: any) => {
  try {
    const { attributes, id, description, image, name } = request.body;
    const data = {
      id,
      image: `https://firebasestorage.googleapis.com/v0/b/uwucrew-3563e/o/${image}.png?alt=media`,
      attributes,
      description,
      name,
    };
    await db.collection("uwus").add(data);
    return response.status(200).send("Uwu Uploaded");
  } catch (error) {
    console.log(error);
    return response.status(500).send(error);
  }
});
