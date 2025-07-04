import filesRouter from "#api/files";
import folderRouter from "#api/folders";
import express from "express";
const app = express();

app.use(express.json());

app.use("/folders", folderRouter);
app.use("/files", filesRouter);

export default app;