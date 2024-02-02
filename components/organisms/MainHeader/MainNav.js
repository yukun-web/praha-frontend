import { Button } from '../../atoms'

export const MainNav = () => {
  return (
    <nav className='bg-background-secondary'>
      <ul className='flex justify-center gap-12 py-6'>
        <li className='p-2 text-white'>ホーム</li>
        <li className='p-2 text-white/50'>宿泊予約</li>
        <li className='p-2 text-white/50'>会員登録</li>
        <li>
          <Button>ログイン</Button>
        </li>
      </ul>
    </nav>
  )
}
