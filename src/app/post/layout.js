export default function LayoutContent({ content, likes }) {
  return (
    <>
      <section>{content}</section>
      <section> {likes}</section>
    </>
  );
}
