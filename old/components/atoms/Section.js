export const Section = ({ children }) => {
  return (
    // px-[31px] めっちゃきもい
    <section className='flex w-full max-w-container flex-col gap-4 bg-white px-[31px] py-4 shadow'>
      {children}
    </section>
  )
}
