import express from "express";
import { fetch, create, update, deletePlayer, singlePlayer, healthCheck, patchPlayer } from "../controller/playerController.js";

const route = express.Router();

//CRUD operation routes
route.post("/create", create);
route.get("/", healthCheck);
route.get("/getAllPlayers", fetch);
route.get("/:id", singlePlayer);
route.put("/update/:id", update);
route.patch("/patch/:id", patchPlayer);
route.delete("/delete/:id", deletePlayer);

export default route;