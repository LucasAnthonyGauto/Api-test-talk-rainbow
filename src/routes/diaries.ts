import express from "express";
import certificatesNewDiaryEntry from "../services/certificates";
import * as diariesServices from "../services/diariesServices";

const routes = express.Router();

routes.get("/", (_req, res) => {
  res.send(diariesServices.getEntries());
  console.log("hola desde res");
});
routes.get("/:id", (req, res) => {
  const post = diariesServices.findById(+req.params.id);
  return post !== null ? res.send(post) : res.sendStatus(404);
});

routes.post("/", (req, res) => {
  try {
    const newDiaryEntry = certificatesNewDiaryEntry(req.body);

    const addDairaryEntry = diariesServices.addEntries(newDiaryEntry);
    res.json(addDairaryEntry);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

routes.put("/:id", (req, res) => {
  try {
    const post = diariesServices.findById(+req.params.id);
    const like = diariesServices.reactionsLike(post);
    const disLike = diariesServices.reactionsDisLike(post);

    res.json(like)
    res.json(disLike)
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default routes;
