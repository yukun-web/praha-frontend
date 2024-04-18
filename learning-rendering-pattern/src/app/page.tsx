import Link from 'next/link'

export default async function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <ul className="text-center grid gap-3">
        <li><Link className="hover:underline" href={'/csr'}>CSR</Link></li>
        <li><Link className="hover:underline" href={'/ssr'}>SSR</Link></li>
        <li><Link className="hover:underline" href={'/ssg'}>SSG</Link></li>
        <li><Link className="hover:underline" href={'/isr'}>ISR</Link></li>
      </ul>
    </main>
  );
}
