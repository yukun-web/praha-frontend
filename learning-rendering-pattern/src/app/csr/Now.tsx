'use client'
import useSWR from 'swr'
import { getNow } from '@/app/csr/getNow'

export function Now() {
  const { data: now } = useSWR('now', getNow, {
    suspense: true,
    fallbackData: { timestamp: 'download...' }
  });

  return (<>CSR: {now.timestamp}</>);
}