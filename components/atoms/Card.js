export const Card = ({ children, header }) => {
  return (
    <div className='divide-y divide-border-card rounded border border-border-card shadow-sm'>
      <div className='bg-background-card-header px-5 py-3'>{header}</div>
      <div className='p-5'>{children}</div>
    </div>
  )
}
