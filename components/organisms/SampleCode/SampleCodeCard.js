import { Card, CardTitle, Dd, Dl, Dt, Link } from '../../atoms'

export const SampleCodeCard = ({ title, framework, language, testingFramework }) => {
  return (
    <div className='min-w-[240px] flex-1'>
      <Card header={`${language}開発者向け`}>
        <CardTitle>{title}</CardTitle>
        <Dl>
          <Dt>フレームワーク</Dt>
          <Dd>
            <Link>{framework}</Link>
          </Dd>
          <Dt>プログラミング言語</Dt>
          <Dd>{language}</Dd>
          <Dt>テスティングフレームワーク</Dt>
          <Dd>
            <Link>{testingFramework}</Link>
          </Dd>
        </Dl>
        <Link>コードを見る</Link>
      </Card>
    </div>
  )
}
