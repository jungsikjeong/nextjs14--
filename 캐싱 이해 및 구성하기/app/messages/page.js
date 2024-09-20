import Messages from '@/components/messages';

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
    next: {
      revalidate: 5, // 5초마다 데이터 새롭게 생성
    },
    // cache: 'force-cache', // 캐시된 데이터를 강제로 사용, 네트워크 요청을 보내지 않고, 캐시에 있는 데이터를 반환함,default값임
    // cache: 'no-store', // 캐시를 사용하지 않고, 항상 새로운 데이터를 가져옴. 요청할 때마다 서버에서 최신 데이터를 받아옴
    // cache: 'no-cache', // 서버에 요청을 보내지만, 캐시를 검증함. 서버에서 최신 데이터를 가져올지, 캐시된 데이터를 사용할지 결정
    // cache: 'only-if-cached', // 네트워크 요청을 보내지 않고, 캐시에 저장된 데이터가 있을 때만 사용. 오프라인 상태에서 주로 사용됨
    // cache: 'reload', // 서버에서 항상 최신 데이터를 가져옴 기존의 캐시된 데이터를 무시하고 새로 데이터를 요청함.
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
