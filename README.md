# 課題１

## アトミックデザインとは

アトミックデザインは Brad Frost により提唱されたウェブデザインの手法です。
これは原子、分子、細胞、生物といった自然界のもののように、デザインを小さな部品に分割し、それらを組み合わせてデザインシステムを構築するという考え方です。

### アトミックデザインにおける用語

#### Atoms

Atoms (= 原子) は、ボタンやラベル、入力欄などの、それ以上分割できない最小単位のデザインパーツです。
これらのパーツは、他のパーツに依存しません。

### Molecules

Molecules (= 分子) は、複数の Atoms を組み合わせたものです。
例えば、ラベルと入力欄を組み合わせた入力項目などです。

### Organisms

Organisms (= 細胞) は、Molecules や Atoms を組み合わせたものです。
Molecular とは異なり、Organisms はそれ自体で機能します。
例えば、ナビゲーションバーなどです。

### Templates

Templates (= テンプレート) は、Organisms や Molecules、Atoms を組み合わせたものです。
これらは、ページの構造を定義します。

### Pages

Pages (= ページ) は、Templates に実際のコンテンツを流し込んだものです。
Next.js の pages は、この Pages と対応します。

### 関数コンポーネントとクラスコンポーネントの違い

関数コンポーネントは、React 16.8 で追加された機能です。
これは、クラスコンポーネントよりもシンプルにコンポーネントを記述できるようになりました。
また、関数コンポーネントでは Hooks という機能を使うことで、ロジックをコンポーネントから切り離すことができます。
これにより、コンポーネントの再利用性を高めることができます。

# 課題２

## position: absolute; を使ってはいけない理由

- position: static になっていない親要素を基準にするため、コンポーネントの外側に影響されたり、自らが小要素として持っている要素に影響を与えてしまう可能性があるため。
- flex, grid などのモダンなテクニックで対応できる内容である場合に、レスポンシブ対応などが難しくなるため
- 表示と HTML から読み取れる構成が乖離してしまうのでアクセシビリティが低下する

## 階層に儲けたルール

- Atoms: HTML タグとそれに準ずるタグのラップ
- Organisms: ページの構成パーツ、ここで Atoms で作ったタグにデータを流し込む
- Pages: Organisms を並べたもの
- Molecules, Template: 使用せず

## Storybook

Button にだけ作ってみた

# 課題３

## アトミックデザインをそのまま開発に用いる場合の問題点

- Molecules で Atoms の便利な組み合わせを作っても、ユースケースごとの微調整でパラメータだらけになりがち
- API 通信は hooks で抽象化できるので、 Page の役割がほとんどない Template と Page は統合してしまっていいと思う
- 一つの用途のためのコンポーネントを再利用しなくても多くのレイヤーにまたがって書かないといけなくなる。例えばメインのサイドメニューとか、抽象化したパーツにしてもアプリごとにデザインが違うことが多いしあまり再利用しない

## アトミックデザインに変わるディレクトリ構造

### 案１：base ディレクトリに基底コンポーネントを入れる、他は全部コンテキストつき、ページはフレームワークのものを流用

- `/components`
  - `/base`: 基底コンポーネント
    - `index.ts`
      - `/Button`
        - `index.ts`
        - `Button.tsx`
        - `Button.stories.ts`
      - `/Input`
        - `index.ts`
        - `Input.tsx`
        - `Input.stories.ts`
  - `/SomeContextiveComponent`: コンテキストを持ったコンポーネント
    - `index.ts`
    - `SomeContextiveComponent.stories.ts`
    - `SomeContextiveComponent.tsx`
    - `useSomeContextiveComponent.ts`
- `/pages`: ページ
  - `index.tsx`

### 案２：基底コンポーネントは別のパッケージへ（モノレポ、コンテキストごとにプロジェクトを作る場合とか）

- `/apps`
  - `/web`: 顧客用フロント
    - `/components`
      - `/SomeContextiveComponent`: コンテキストを持ったコンポーネント
        - `index.ts`
        - `SomeContextiveComponent.stories.ts`
        - `SomeContextiveComponent.tsx`
        - `useSomeContextiveComponent.ts`
    - `/pages`: ページ
      - `index.tsx`
  - `/admin`: 管理用フロント
    - `...`
- `/packages`
  - `/base-ui`: 基底コンポーネントのパッケージ
    - `index.ts`
      - `/Button`
        - `index.ts`
        - `Button.tsx`
        - `Button.stories.ts`
      - `/Input`
        - `index.ts`
        - `Input.tsx`
        - `Input.stories.ts`
