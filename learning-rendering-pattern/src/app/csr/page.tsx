'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

async function getNow() {
  const response = await fetch('http://localhost:3000/now', { cache: 'no-cache' });

  if (!response.ok) {
    throw new Error('Failed to fetch star count');
  }

  const { now } = await response.json();
  return now as string;
}

export default function CSR() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    getNow().then(setNow);
  }, []);

  return (
    <main className="flex flex-col gap-3 items-center justify-center h-screen">
      <div>CSR: {now}</div>
      <div>
        <Link className="hover:underline" href={'/'}>Home</Link>
      </div>
    </main>
  )
}