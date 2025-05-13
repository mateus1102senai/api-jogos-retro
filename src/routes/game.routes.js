import express from 'express';

import GamesController from "../controllers/game.controller.js";

const gamesRouter = express.Router();

gamesRouter.get("/", GamesController.findAll);
gamesRouter.post("/", GamesController.create);

export default gamesRouter;