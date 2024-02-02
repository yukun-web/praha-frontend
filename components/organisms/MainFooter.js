import { Copyright, Link, P } from '../atoms'

export const MainFooter = () => {
  return (
    <footer className='mb-4 flex flex-col items-center justify-center gap-4 py-12'>
      <Link>GitHub</Link>
      <P>
        <Copyright>© 2020 Test Planisphere</Copyright>
      </P>
    </footer>
  )
}
