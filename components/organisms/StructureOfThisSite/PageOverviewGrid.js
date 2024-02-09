import { usePageOverviews } from './usePageOverviews'
import { chunk } from '../../../utils/chunk'
import { PageOverview } from './PageOverview'

export const PageOverviewGrid = () => {
  const overviews = usePageOverviews()
  const chunkedOverviews = chunk(overviews, 3)

  return (
    <div className="flex flex-col gap-4 lg:gap-0">
      {chunkedOverviews.map((overviews, i) => (
        <div key={i}>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[30px]'>
            {overviews.map((overview, j) => (
              <PageOverview key={j} {...overview} />
            ))}
          </div>
          {i < chunkedOverviews.length - 1 && <hr className='col-span-3 mb-4 mt-8 hidden lg:block' />}
        </div>
      ))}
    </div>
  )
}
