import db from "#db/client";

export async function createFile(name, size, folder_id) {
    const sql = `
    INSERT INTO files(name, size, folder_id)
    VALUES($1, $2, $3)
    RETURNING *;
    `;

    const { rows: [file]} = await db.query(sql, [name, size, folder_id]);

    return file;
}

export async function getFiles() {
    const sql = `
    SELECT 
        files.*, 
        folders.name AS folder_name 
    FROM files
    LEFT JOIN folders ON folders.id = files.folder_id
    `;

    const { rows } = await db.query(sql);

    return rows;
}

export async function getFilesByFolder(folder_id) {
    const sql = `
    SELECT * FROM files
    WHERE folder_id = $1
    `;

    const { rows } = await db.query(sql, [folder_id]);

    return rows;
}
