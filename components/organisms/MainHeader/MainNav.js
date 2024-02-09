import { Button } from '../../atoms'

export const MainNav = () => {
  return (
    <nav className='bg-background-secondary text-sm lg:text-base'>
      <ul className='flex justify-center gap-4 py-6 lg:gap-12'>
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
