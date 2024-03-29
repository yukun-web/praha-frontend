# 課題２

## レスポンシブデザインの手法

### ユーザーのデバイス種別を用いる

#### Pros
* やろうと思えば機種固有のバグなんかにも細かく対応できる
* デザインだけでなく JavaScript を用いた処理も出し分けられる

#### Cons
* 書き方によってはデザインは CSS, 動作は JavaScript の切り分けが曖昧になる（レスポンシブに特化したコンポーネントを切らなければ）
* コンポーネントを切ったとしても記述が冗長になりがち

### メディアクエリを用いる

#### Pros
* Tailwind とか使ったら楽に書ける
* デザインと動作の切り分けが明確になる
* 差分だけを上書きするので、コードが冗長になりにくい

#### Cons
* CSS でできる範囲にしか適用できない

### そもそも別で作る

#### Pros
* お互いの変更が影響しない
* 各デバイスに最適化しやすい

### Cons
* コード量が増える
* 共通化が難しい（してしまうと利点が消える）ので規模が大きくなるのであれば別チームになるかも