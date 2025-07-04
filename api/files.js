import { getFiles } from "#db/query/files";
import express from "express";
const filesRouter = express.Router();

filesRouter.get("/", async (req, res) => {
    res.status(200).json(await getFiles());
});

export default filesRouter;