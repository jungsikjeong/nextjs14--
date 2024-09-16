import NewsList from '@/components/news-list';
import { getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import Link from 'next/link';
import React from 'react';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter); // 2024, 2023,2022 헤더 목록이있으면 2024를 누르면 콘솔에 ['2024'] 가 찍힘

  const links = getAvailableNewsYears();

  return (
    <header id='archive-header'>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(newsYear);

  // return <NewsList news={news} />;
}
