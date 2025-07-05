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
    SELECT folders.*, json_agg(files) AS files
    FROM folders
    LEFT JOIN files ON files.folder_id = folders.id
    WHERE folders.id = $1
    GROUP BY folders.id
    `;

    const { rows } = await db.query(sql, [id]);

    console.log(rows);

    return rows[0];
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