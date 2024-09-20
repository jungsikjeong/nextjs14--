import { unstable_noStore } from 'next/cache';

import Messages from '@/components/messages';

// export와 revalidate이름을 꼭 명시해줘야됌
// export const revalidate = 5; // 5초동안 데이터가 캐시되어 재사용됌 fetch의 next:{revalidate} 옵션과 같음

// export const dynamic ='auto' // 기본값
// export const dynamic = 'force-dynamic' // fetch요청에서 캐시 설정을 no-store로 설정한것과 같음
// export const dynamic = 'force-static' // 캐싱처리된 데이터만 가져옴, 새로운 데이터 X

export default async function MessagesPage() {
  // export const dynamic = 'force-dynamic'와 같음, 하지만 더 나은 방식임
  // 데이터가 캐시되지 않도록 확실하게 하고자 하는 컴포넌트 내에서 호출한다.
  // 이 컴포넌트 또는 이 컴포넌트로부터 보내질 수 있는 모든 데이터 소스에대한 요청에 대해 얻게된다.
  unstable_noStore();
  const response = await fetch('http://localhost:8080/messages');
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
