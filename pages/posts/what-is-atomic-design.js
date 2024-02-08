import { H2, H3, H4, Li, P, Section, Ul } from '../../components/atoms'
import { MainHeader } from '../../components/organisms'

export default function FirstPost() {
  return (
    <>
      <MainHeader />
      <div className='flex flex-col items-center gap-10 py-20'>
        <Section>
          <H2>課題１</H2>
          <H3>アトミックデザインとは</H3>
          <P>
            アトミックデザインは Brad Frost により提唱されたウェブデザインの手法です。
            <br />
            これは原子、分子、細胞、生物といった自然界のもののように、デザインを小さな部品に分割し、それらを組み合わせてデザインシステムを構築するという考え方です。
          </P>
          <H3>アトミックデザインにおける用語</H3>
          <H4>Atoms</H4>
          <P>
            Atoms (= 原子)
            は、ボタンやラベル、入力欄などの、それ以上分割できない最小単位のデザインパーツです。
            <br />
            これらのパーツは、他のパーツに依存しません。
          </P>
          <H3>Molecules</H3>
          <P>
            Molecules (= 分子) は、複数の Atoms を組み合わせたものです。
            <br />
            例えば、ラベルと入力欄を組み合わせた入力項目などです。
          </P>
          <H3>Organisms</H3>
          <P>
            Organisms (= 細胞) は、Molecules や Atoms を組み合わせたものです。
            <br />
            Molecular とは異なり、Organisms はそれ自体で機能します。
            <br />
            例えば、ナビゲーションバーなどです。
          </P>
          <H3>Templates</H3>
          <P>
            Templates (= テンプレート) は、Organisms や Molecules、Atoms を組み合わせたものです。
            <br />
            これらは、ページの構造を定義します。
          </P>
          <H3>Pages</H3>
          <P>
            Pages (= ページ) は、Templates に実際のコンテンツを流し込んだものです。
            <br />
            Next.js の pages は、この Pages と対応します。
          </P>
          <H3>関数コンポーネントとクラスコンポーネントの違い</H3>
          <P>
            関数コンポーネントは、React 16.8 で追加された機能です。
            <br />
            これは、クラスコンポーネントよりもシンプルにコンポーネントを記述できるようになりました。
          </P>
          <P>
            また、関数コンポーネントでは Hooks
            という機能を使うことで、ロジックをコンポーネントから切り離すことができます。
            <br />
            これにより、コンポーネントの再利用性を高めることができます。
          </P>
        </Section>
        <Section>
          <H2>課題２</H2>
          <H3>position: absolute; を使ってはいけない理由</H3>
          <Ul>
            <Li>
              position: static
              になっていない親要素を基準にするため、コンポーネントの外側に影響されたり、自らが小要素として持っている要素に影響を与えてしまう可能性があるため。
            </Li>
            <Li>
              flex, grid
              などのモダンなテクニックで対応できる内容である場合に、レスポンシブ対応などが難しくなるため
            </Li>
            <Li>表示と HTML から読み取れる構成が乖離してしまうのでアクセシビリティが低下する</Li>
          </Ul>
          <H3>階層に儲けたルール</H3>
          <Ul>
            <Li>Atoms: HTML タグとそれに準ずるタグのラップ</Li>
            <Li>Organisms: ページの構成パーツ、ここで Atoms で作ったタグにデータを流し込む</Li>
            <Li>Pages: Organisms を並べたもの</Li>
            <Li>Molecules, Template: 使用せず</Li>
          </Ul>
          <H3>Storybook</H3>
          <P>Button にだけ作ってみた</P>
          <H2>課題３</H2>
          <H3>アトミックデザインをそのまま開発に用いる場合の問題点</H3>
          <Ul>
            <Li>
              Molecules で Atoms
              の便利な組み合わせを作っても、ユースケースごとの微調整でパラメータだらけになりがち
            </Li>
            <Li>
              API 通信は hooks で抽象化できるので、 Page の役割がほとんどない Template と Page
              は統合してしまっていいと思う
            </Li>
            <Li>
              一つの用途のためのコンポーネントを再利用しなくても多くのレイヤーにまたがって書かないといけなくなる
              <br />
              例えばメインのサイドメニューとか、抽象化したパーツにしてもアプリごとにデザインが違うことが多いしあまり再利用しない
            </Li>
          </Ul>
          <H3>アトミックデザインに変わるディレクトリ構造</H3>
          <H4>
            案１：base
            ディレクトリに基底コンポーネントを入れる、他は全部コンテキストつき、ページはフレームワークのものを流用
          </H4>
          <Ul>
            <Li>/components</Li>
            <Ul>
              <Li>/base: 基底コンポーネント</Li>
              <Ul>
                <Li>index.ts</Li>
                <Ul>
                  <Li>/Button</Li>
                  <Ul>
                    <Li>index.ts</Li>
                    <Li>Button.tsx</Li>
                    <Li>Button.stories.ts</Li>
                  </Ul>
                </Ul>
                <Ul>
                  <Li>/Input</Li>
                  <Ul>
                    <Li>index.ts</Li>
                    <Li>Input.tsx</Li>
                    <Li>Input.stories.ts</Li>
                  </Ul>
                </Ul>
              </Ul>
              <Li>/SomeContextiveComponent: コンテキストを持ったコンポーネント</Li>
              <Ul>
                <Li>index.ts</Li>
                <Li>SomeContextiveComponent.stories.ts</Li>
                <Li>SomeContextiveComponent.tsx</Li>
                <Li>useSomeContextiveComponent.ts</Li>
              </Ul>
            </Ul>
            <li>/pages: ページ</li>
            <Ul>
              <Li>index.tsx</Li>
            </Ul>
          </Ul>
          <H4>
            案２：基底コンポーネントは別のパッケージへ（モノレポ、コンテキストごとにプロジェクトを作る場合とか）
          </H4>
          <Ul>
            <Li>/apps</Li>
            <Ul>
              <Li>/web: 顧客用フロント</Li>
              <Ul>
                <Li>/components</Li>
                <Ul>
                  <Li>/SomeContextiveComponent: コンテキストを持ったコンポーネント</Li>
                  <Ul>
                    <Li>index.ts</Li>
                    <Li>SomeContextiveComponent.stories.ts</Li>
                    <Li>SomeContextiveComponent.tsx</Li>
                    <Li>useSomeContextiveComponent.ts</Li>
                  </Ul>
                </Ul>
                <li>/pages: ページ</li>
                <Ul>
                  <Li>index.tsx</Li>
                </Ul>
              </Ul>
              <Li>/admin: 管理用フロント</Li>
              <Ul>
                <Li>...</Li>
              </Ul>
            </Ul>
            <Li>/packages</Li>
            <Ul>
              <Li>/base-ui: 基底コンポーネントのパッケージ</Li>
              <Ul>
                <Li>index.ts</Li>
                <Ul>
                  <Li>/Button</Li>
                  <Ul>
                    <Li>index.ts</Li>
                    <Li>Button.tsx</Li>
                    <Li>Button.stories.ts</Li>
                  </Ul>
                </Ul>
                <Ul>
                  <Li>/Input</Li>
                  <Ul>
                    <Li>index.ts</Li>
                    <Li>Input.tsx</Li>
                    <Li>Input.stories.ts</Li>
                  </Ul>
                </Ul>
              </Ul>
            </Ul>
          </Ul>
        </Section>
      </div>
    </>
  )
}
