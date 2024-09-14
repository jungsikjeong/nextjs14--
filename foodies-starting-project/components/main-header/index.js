import Image from 'next/image';
import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          {/* priority는 로딩 우선처리임 이거없으면 경고 뜸 */}
          <Image src={logoImg} alt='A plate with food on it' priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
