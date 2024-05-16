'use client'
import Link from 'next/link'
import { Now } from '@/app/csr/Now'

export default function CSR() {
  return (
      <main className="flex flex-col gap-3 items-center justify-center h-screen">
        <div>
          <Now />
          </div>
        <div>
          <Link className="hover:underline" href={'/'}>Home</Link>
        </div>
      </main>
  )
}