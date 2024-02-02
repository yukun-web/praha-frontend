import { H3, H4, Inner, Li, Link, P, Section, Ul } from '../../atoms'
import { PageOverviewGrid } from './PageOverviewGrid'
import { AccountTable } from './AccountTable'

export const StructureOfThisSite = () => {
  return (
    <Section>
      <H3>サイトの構成</H3>
      <P>
        ホテルの予約サイトを模した作りになっています。ログイン・会員登録・ホテルの宿泊予約のそれぞれの入力フォームを用意しています。レスポンシブデザインに対応しているためモバイルブラウザでも表示できます。
      </P>
      <Inner>
        <H4>ご利用上の注意</H4>
        <Ul>
          <Li>2020年7月時点でのGoogle Chromeの最新版で動作確認をしています。</Li>
          <Li>サイトはGitHub Pagesでホストされています。</Li>
          <Li>入力データについて</Li>
          <Ul>
            <Li>データはブラウザのCookieおよびSession Storage、Local Storageに保存されます。</Li>
            <Li>DBなどサーバ側での保存はありません。</Li>
            <Li>
              HTMLの仕様上、フォームへの入力内容はURLの末尾に付加されて送信されます。Githubサーバのログなどに残る可能性があるのでお気をつけください。
            </Li>
          </Ul>
          <Li>負荷テストには利用しないでください。</Li>
          <Li>
            このサイトを利用することによって生じた損害などにつきましては、一切の責任を負いません。
          </Li>
        </Ul>
      </Inner>
      <Inner>
        <H4>構成の詳細</H4>
        <PageOverviewGrid />
        <P>
          <Link>より詳しい解説はこちら（研修を作る方向け）</Link>
        </P>
        <AccountTable />
      </Inner>
    </Section>
  )
}
