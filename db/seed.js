import db from "#db/client";
import { createFile } from "./query/files.js";
import { createFolder } from "./query/folders.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createFolder("Documents");
  await createFolder("Pictures");
  await createFolder("Downloads");

  await createFile("Test1.txt", 100, 1);
  await createFile("Test2.txt", 100, 1);
  await createFile("Test3.txt", 100, 1);
  await createFile("Test4.txt", 100, 1);
  await createFile("Test5.txt", 100, 1);

  await createFile("Test1.png", 100, 2);
  await createFile("Test2.png", 100, 2);
  await createFile("Test3.png", 100, 2);
  await createFile("Test4.png", 100, 2);
  await createFile("Test5.png", 100, 2);

  await createFile("Test1.jar", 100, 3);
  await createFile("Test2.jar", 100, 3);
  await createFile("Test3.jar", 100, 3);
  await createFile("Test4.jar", 100, 3);
  await createFile("Test5.jar", 100, 3);
}
