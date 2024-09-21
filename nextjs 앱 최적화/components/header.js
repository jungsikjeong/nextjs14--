import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  console.log(logo);
  return (
    <header id='main-header'>
      <Link href='/'>
        <Image
          src={logo}
          // 고정된 이미지 크기가 주어진 사용 사례에 경우엔 width,height를 사용.
          width={100}
          height={100}
          // sizes='10vw' // 현재 사용하는 뷰포트의 대략 10%의 너비로 조정된다는 의미
          priority // 페이지가 로드될 때 화면에 무조건 표시될 것을 알고있다면 이 옵션을 주자., 이미지 사전로딩 , 지연로딩 비활성화
          alt='Mobile phone with posts feed on it'
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/feed'>Feed</Link>
          </li>
          <li>
            <Link className='cta-link' href='/new-post'>
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
