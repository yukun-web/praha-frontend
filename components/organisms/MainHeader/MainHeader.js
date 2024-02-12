import { Title } from '../../atoms'
import { MainNav } from './MainNav'
import { HamburgerButton } from './HamburgerButton'
import { useState } from 'react'

// ここまでくると同じコンポーネントにしなくても良かったかもと思えてきた。
export const MainHeader = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const toggle = () => {
    setIsMenuShown((prevState) => !prevState)
  }

  return (
    <>
      <header className="flex flex-wrap items-center justify-between bg-background-secondary px-4 py-2 lg:block lg:bg-transparent lg:p-0">
        <Title>HOTEL PLANISPHERE</Title>
        <HamburgerButton onClick={toggle} />
        <MainNav visible={isMenuShown} />
      </header>
    </>
  )
}
