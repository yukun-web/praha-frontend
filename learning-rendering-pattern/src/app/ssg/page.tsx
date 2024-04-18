import Link from 'next/link'

async function getNow() {
  const response = await fetch('http://localhost:3000/now', { cache: 'force-cache' });

  if (!response.ok) {
    throw new Error('Failed to fetch star count');
  }

  const { now } = await response.json();
  return now as string;
}

export default async function SSG() {
  const now = await getNow()

  return (
    <main className="flex flex-col gap-3 items-center justify-center h-screen">
      <div>SSG: {now}</div>
      <div>
        <Link className="hover:underline" href={'/'}>Home</Link>
      </div>
    </main>
  )
}