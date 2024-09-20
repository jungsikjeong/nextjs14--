import { cache } from 'react';
import { unstable_cache as nextCache } from 'next/cache';
import sql from 'better-sqlite3';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

// cache: 여러곳에서 사용해도 응답 결과를 캐싱처리해서 한번만 호출이 됌
// export const getMessages = cache(function getMessages() {
//   console.log('Fetching messages from db');
//   return db.prepare('SELECT * FROM messages').all();
// });

// nextCache: 해당 함수가 반환하는 데이터를 NextJS의 데이터 캐시에서 캐시할 수 있도록 함
// export const getMessages = nextCache(
//   cache(function getMessages() {
//     console.log('Fetching messages from db');
//     return db.prepare('SELECT * FROM messages').all();
//   })
// );

// 두번째 인수로 내부적으로 배열을줄 수 있음
// 캐시된 데이터를 식별하는데 사용됌

// 방법1:
// 이 함수를 호출하는곳에서 revalidatePath('경로'); 를 사용해서 호출시 그 경로의 캐시데이터를 재검증하게함으로써
// 데이터를 새롭게 가져오게할 수있음
export const getMessages = nextCache(
  cache(function getMessages() {
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all();
  }),
  ['messages']
);

// 방법2:revalidateTag()를 활용하는 방법.
export const getMessages2 = nextCache(
  cache(function getMessages() {
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all();
  }),
  ['messages'],
  {
    tags: ['msg'],
  }
);
