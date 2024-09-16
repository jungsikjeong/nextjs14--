import Link from 'next/link';
import React from 'react';

export default function NewsPage() {
  return (
    <>
      <Link href='/news/:id'>첫번째 뉴스 아이템</Link>
      <Link href='/'>두번째 뉴스 아이템</Link>
      <Link href='/'>세번째 뉴스 아이템</Link>
    </>
  );
}
