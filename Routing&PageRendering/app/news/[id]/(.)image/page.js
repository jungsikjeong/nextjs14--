import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

// 페이지 도달 방법에 따라 다른 page.js 파일이 로드됌
// 새로고침하거나 url에 입력하여 링크에 직접들어오면 인터셉터 X
// 클릭하여 들어오면 인터셉터 O

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.id;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>Intercepted!</h2>
      <div className='fullscreen-image'>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
}
