import db from "#db/client";

export async function createFolder(name) {
    const sql = `
    INSERT INTO folders(name)
    VALUES($1)
    RETURNING *;
    `;

    const { rows: [folder] } = await db.query(sql, [name]);

    return folder;
}

export async function getFolderById(id) {
    const sql = `
    SELECT * FROM folders
    WHERE id = $1
    `;

    const { rows: [folder]} = await db.query(sql, [id]);

    return folder;
}

export async function getFolders() {
    const sql = `
    SELECT * FROM folders
    `;

    const { rows } = await db.query(sql);

    return rows;
}

export async function deleteFolder(id) {
    const sql = `
    DELETE FROM folders
    WHERE id = $1
    RETURNING *;
    `;

    const { rows: [folder] } = await db.query(sql, [id]);

    return folder;
}