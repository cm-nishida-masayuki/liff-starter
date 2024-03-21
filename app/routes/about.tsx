import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div>
      <section>
        <h1>このサイトについて</h1>
        <p>このサイトはサンプルサイトです</p>
      </section>
      <Link to="/">トップページに戻る</Link>
    </div>
  );
}
