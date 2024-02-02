import {
  MainFooter,
  MainHeader,
  SampleCode,
  StructureOfThisSite,
  WhatIsThisSite,
} from '../components/organisms'

export default function Home() {
  return (
    <>
      <MainHeader />
      <div className='flex flex-col items-center gap-4 py-4'>
        <WhatIsThisSite />
        <StructureOfThisSite />
        <SampleCode />
      </div>
      <MainFooter />
    </>
  )
}
