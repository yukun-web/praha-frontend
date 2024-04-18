import Link from 'next/link'

async function getNow() {
  const response = await fetch('http://localhost:3000/now', { next: { revalidate: 3 } });

  if (!response.ok) {
    throw new Error('Failed to fetch star count');
  }

  const { now } = await response.json();
  return now as string;
}

export default async function ISR() {
  const now = await getNow()

  return (
    <main className="flex flex-col gap-3 items-center justify-center h-screen">
      <div>ISR: {now}</div>
      <div>
        <Link className="hover:underline" href={'/'}>Home</Link>
      </div>
    </main>
  )
}