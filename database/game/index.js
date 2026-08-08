const games = new Map();

export function setGame(chatId, game) {
  games.set(chatId, game);
}

export function getGame(chatId) {
  return games.get(chatId);
}

export function deleteGame(chatId) {
  games.delete(chatId);
}

