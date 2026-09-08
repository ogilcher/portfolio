import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="section-index">404</p>
      <h1>That route does not exist.</h1>
      <Link className="button button-primary" href="/">Back home</Link>
    </main>
  );
}
