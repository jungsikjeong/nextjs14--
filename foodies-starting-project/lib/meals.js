import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolver) => setTimeout(resolver, 2000)); // 추가지연임
  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}
