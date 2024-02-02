export const Button = ({ children }) => {
  return (
    <button className='rounded border border-border-primary px-3 py-1.5 text-text-secondary transition-colors hover:bg-background-tertiary hover:text-white'>
      {children}
    </button>
  )
}
