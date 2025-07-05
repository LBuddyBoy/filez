import { createFile } from "#db/query/files";
import { getFolderById, getFolders } from "#db/query/folders";
import express from "express";
const folderRouter = express.Router();

folderRouter.get("/", async (req, res) => {
  res.status(200).json(await getFolders());
});

folderRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const folder = await getFolderById(id);

  if (!folder) {
    return res.status(404).json("A folder with that id does not exist.");
  }

  res.status(200).json(folder);
});

folderRouter.post("/:id/files", async (req, res) => {
  if (!req.body) {
    return res.status(400).json("Invalid body provided.");
  }

  if (!req.params) {
    return res.status(400).json("Invalid parameters provided.");
  }

  const { id } = req.params;
  const { name, size } = req.body;

  if (!name || !size) {
    return res.status(400).json("Invalid body provided.");
  }

  if (!(await getFolderById(id))) {
    return res.status(404).json("A folder with that id does not exist.");
  }

  try {
    const file = await createFile(name, size, id);

    res.status(201).json(file);
  } catch (error) {
    console.log(error);
  }
});

export default folderRouter;
