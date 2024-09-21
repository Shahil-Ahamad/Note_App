import express from "express";
import bodyParser from "body-parser";
import {
  createNoteController,
  deleteNoteController,
  getAllNoteController,
  getNoteController,
  updateNoteController,
} from "./controller/notecontroller";

const PORT = 4000;

const app = express();

app.use(bodyParser.json());

// get-note using query
app.get("/get-note", getNoteController);

// create-note
app.post("/create-note", createNoteController);

// delete-note using query
app.delete("/delete-note", deleteNoteController);

// get-all-notes
app.get("/get-all-notes", getAllNoteController);

// update-note using query
app.post("/update-note", updateNoteController);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
