export const usePageOverviews = () => {
  return [
    {
      title: 'ログイン画面',
      content:
        'シンプルなテキストインプットとボタンの画面です。ログイン情報はCookieに保存されます。会員登録画面で保存したユーザの他、登録済みのユーザ（下記）があります。',
    },
    {
      title: '会員登録画面',
      content:
        '複数種類のインプットがある画面です。この画面で登録したユーザはLocal Storageに保存され、ログインに使用することができるようになります。',
    },
    {
      title: 'マイページ画面',
      content:
        'ログイン後に表示される画面です。登録したユーザ情報が表示され、確認に使うことができます。また、新規登録したユーザの場合アイコン画像の設定と退会（情報削除）ができます。',
    },
    {
      title: '宿泊プラン一覧画面',
      content:
        '「宿泊予約」のメニューから表示できる画面です。表示されるプランは「未ログイン」「一般会員」「プレミアム会員」によって変わります。プラン情報はAjaxで非同期に読み込まれます（トップの一つを除く）。',
    },
    {
      title: '宿泊予約画面',
      content:
        '宿泊の予約を行う画面です。新規ウィンドウで開きます。複数種類のインプットのほか、合計金額が入力内容で動的に計算され表示されます。基本料および宿泊数・人数の許容値は選択したプランで変わります。',
    },
    {
      title: '宿泊予約確認画面',
      content:
        '宿泊予約の確定後に表示される画面です。予約で入力した内容の確認表示があります。また、アニメーション付きのダイアログが表示されます。',
    },
  ]
}
