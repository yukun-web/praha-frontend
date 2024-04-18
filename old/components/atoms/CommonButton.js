import { useMemo } from 'react'

export const CommonButton = ({
  children,
  color = 'blue',
  size = 'medium',
  disabled = false,
  onClick
}) => {
  const coloringClassNames = useMemo(() => {
    if (disabled) {
      return 'bg-zinc-200 text-zinc-400'
    }

    if (color === 'red') {
      return 'bg-red-600 text-white'
    }

    return 'bg-blue-500 text-white'
  }, [color, disabled])

  const sizingClassNames = useMemo(() => {
    if (size === 'small') {
      return 'px-2 py-1.5 rounded'
    }

    if (size === 'large') {
      return 'px-5 py-3 rounded-md text-lg'
    }

    return 'px-4 py-2.5 rounded-md'
  }, [size])

  const elevatingClassNames = useMemo(() => {
    if (disabled) {
      return ''
    }

    return 'shadow'
  }, [disabled])

  const classNames = useMemo(
    () => [elevatingClassNames, coloringClassNames, sizingClassNames].join(' '),
    [coloringClassNames, elevatingClassNames, sizingClassNames]
  )

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>{ children }</button>
  )
}