import { getDB } from "./database.js";

export async function addHit(userId) {
  const db = getDB();
  db.data.users[userId] ??= { hits: 0 };
  db.data.users[userId].hits = (db.data.users[userId].hits || 0) + 1;
  await db.write();
  return db.data.users[userId].hits;
}

export function getHit(userId) {
  const db = getDB();
  return db.data.users[userId]?.hits || 0;
}

