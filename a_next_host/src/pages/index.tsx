import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <h1>This is a gome page</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/vue">Vue Child App</Link>
          </li>
          <li>
            <Link href="/react">React Child App</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
