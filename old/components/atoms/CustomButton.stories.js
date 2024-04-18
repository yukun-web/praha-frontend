import { useMemo } from 'react'

const Button = ({ children, color }) => {
  const coloringClassNames = useMemo(() => {
    return color === 'red' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
  }, [color])

  const sizingClassNames = useMemo(() => {
    return 'px-4 py-2.5 rounded-md'
  }, [])

  const classNames = useMemo(
    () => [sizingClassNames, coloringClassNames].join(' '),
    [coloringClassNames, sizingClassNames]
  )

  return (
    <button className={classNames}>{ children }</button>
  )
}

export default {
  component: Button,
}

export const Basic = {
  args: {
    children: 'ボタンテキスト',
    color: 'red',
  },
}

const PrimaryButton = ({ children }) => {
  return (
    <Button color='blue'>{ children }</Button>
  )
}

const SecondaryButton = ({ children }) => {
  return (
    <Button color='red'>{ children }</Button>
  )
}

export const Primary = {
  render: PrimaryButton,
  args: {
    children: 'プライマリーボタン',
  },
}

export const Secondary = {
  render: SecondaryButton,
  args: {
    children: 'セカンダリーボタン',
  },
}