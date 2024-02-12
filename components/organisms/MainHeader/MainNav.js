import { Button } from '../../atoms'
import { useMemo } from 'react'

export const MainNav = ({ visible }) => {
  // スライドは面倒なので非対応
  const visibilityClassName = useMemo(() => visible ? ' flex' : ' hidden lg:flex', [visible])

  return (
    <nav className='basis-full bg-background-secondary'>
      <ul className={'flex-col justify-center gap-4 py-2 lg:flex-row lg:gap-12 lg:py-6' + visibilityClassName}>
        <li className="text-white lg:p-2">ホーム</li>
        <li className="text-white/50 lg:p-2">宿泊予約</li>
        <li className="text-white/50 lg:p-2">会員登録</li>
        <li>
          <Button>ログイン</Button>
        </li>
      </ul>
    </nav>
  )
}

