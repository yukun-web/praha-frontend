import { H5, P } from '../../atoms'

export const PageOverview = ({ title, content }) => {
  return (
    <div>
      <H5>{title}</H5>
      <P>{content}</P>
    </div>
  )
}
