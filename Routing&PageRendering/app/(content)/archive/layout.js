// 병렬 컴포넌트의 props를 가져올 수 있음
export default function Archivelayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id='archive-filter'>{archive}</section>

      <section id='archive-latest'>{latest}</section>
    </div>
  );
}
