import { getFilesByFolder } from "#db/query/files";
import { getFolderById, getFolders } from "#db/query/folders";
import express from "express";
const folderRouter = express.Router();

folderRouter.get("/", async (req, res) => {
    res.status(200).json(await getFolders());
});

folderRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const folder = await getFolderById(id);

    res.status(200).json(folder);
})

folderRouter.get("/:id/files", async (req, res) => {
    const { id } = req.params;
    const files = await getFilesByFolder(id);

    res.status(200).json(files);
});

export default folderRouter;