import { JSONFilePreset } from "lowdb/node";
import config from "../config.js";

const defaults = {
  users: {},
  chats: {},
  games: {},
  settings: {}
};

let db;

export async function initDB() {
  db = await JSONFilePreset(config.databaseFile, defaults);
  await db.write();
  return db;
}

export function getDB() {
  if (!db) throw new Error("Database belum diinisialisasi.");
  return db;
}
