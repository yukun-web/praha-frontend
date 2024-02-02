import { H2, Link, P, Section } from '../atoms'

export const WhatIsThisSite = () => {
  return (
    <Section>
      <H2>このサイトはテスト自動化の学習用の練習サイトです。</H2>
      <P>
        Seleniumなどのブラウザテスト自動化を学習したい方が、実際にテストスクリプトを実行するための
        <b>テスト対象サイト</b>として作成されています。
      </P>
      <P>
        書籍やブログなどでのサンプルやデモにもお使いいただけます。ライセンスは
        <Link>MIT License</Link>です。
      </P>
      <P>
        自動テストの学習を目的として作成されていますが、テスト設計や技法の学習に使うことも可能です。
      </P>
    </Section>
  )
}
