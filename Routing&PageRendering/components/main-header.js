import React from 'react';

export default function MainHeader() {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/news'>News</Link>
        </li>
      </ul>
    </header>
  );
}
