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
      <div className='flex flex-col items-center gap-4 p-4 lg:px-0'>
        <WhatIsThisSite />
        <StructureOfThisSite />
        <SampleCode />
      </div>
      <MainFooter />
    </>
  )
}
