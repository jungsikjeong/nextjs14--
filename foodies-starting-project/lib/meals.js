import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function GetMeals() {
  await new Promise((resolver) => setTimeout(resolver, 2000)); // 추가지연임
  return db.prepare('SELECT * FROM meals').all();
}
