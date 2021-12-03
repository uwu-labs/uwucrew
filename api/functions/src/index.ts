import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

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

export const moodsUpdateV1 = app;
