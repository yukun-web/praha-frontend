export async function getNow(): Promise<{ timestamp: string }> {
  const response = await fetch('http://localhost:3000/now', { cache: 'no-cache' });

  if (!response.ok) {
    throw new Error('Failed to fetch star count');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { now } = await response.json();

  return { timestamp: now };
}