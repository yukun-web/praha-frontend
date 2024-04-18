export const Link = ({ children }) => {
  return (
    <a className='cursor-pointer text-text-link hover:text-text-link-hover hover:underline'>
      {children}
    </a>
  )
}
