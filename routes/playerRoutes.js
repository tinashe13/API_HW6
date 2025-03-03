import express from "express";
import { fetch, create, update, deletePlayer, singlePlayer } from "../controller/playerController.js";

const route = express.Router();

//CRUD operation routes
route.post("/create", create);
route.get("/getAllPlayers", fetch);
route.get("/:id", singlePlayer);
route.put("/update/:id", update);
route.delete("/delete/:id", deletePlayer);

export default route;