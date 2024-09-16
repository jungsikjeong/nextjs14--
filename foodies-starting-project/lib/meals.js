import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolver) => setTimeout(resolver, 2000)); // 추가지연임
  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // 한글은안됌
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop(); // 확장자 가져오기
  const fileName = `${meal.slug}.${extension}`; // 파일명+ 확장자 결합

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedIamge = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedIamge), (error) => {
    if (error) {
      throw new Error('저장중 에러 발생!');
    }
  });

  meal.image = `public/images/${fileName}`;

  // 인젝션 방지하고자 VALUES()괄호안에 이렇게적어준것.
  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email,image,slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
    `
  ).run(meal);
}
