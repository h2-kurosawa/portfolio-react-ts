# portfolio-react-ts

My First Portfolio --> **[CLICK HERE!](https://h2-kurosawa.github.io/portfolio-react-ts/)**

🐑 : Create-React-App (--typescript)
🐑 : TypeScript / React / Sass
🐑 : Material-UI / iconify
🐑 : ESLint / Prettier
🐑 : GIMP / AdobeXD

🐫 Update! -> 2021.02.26

## Process

1. 構成検討・環境構築 - - - - - - - - - - - - 2.0 (H)
2. コンポーネント設計・JSON 型定義 - - - 13.0 (H)💥
3. デザイン設計・アイコン作成 - - - - - - - 3.0 (H)
4. レンダリング・CSS - - - - - - - - - - - - 5.0 (H)
5. 外部 API・モーダル・State 管理 - - - - - 6.0 (H)

    -> Total: 2 + 13 + 3 + 5 + 6 = 29.0 (H) 🥺

## Point

-   構成をシンプルにする
    -   最初から複雑にすると混乱する
    -   ポートフォリオデータはひとつのファイルにまとめる
-   それぞれの手法をとりいれる
    -   クラスコンポーネント / 関数コンポーネント　※コンストラクター使いそこねる。。
    -   Material-UI / モーダルウィンドウ

### 乗り越えた壁

-   VSCode で TypeScript の補完機能がまったくきかぬ（それが最高のはずなのに） -> VSCode 初期化により解消
-   JSON の型定義地獄に嵌る -> kintone を参考にしてまう
-   React.FC の型定義でエラーが止まらぬ -> return で Element を返すことの意味を知る

### 乗り越えられなかった壁

-   axios -> JSON 取得 -> props 渡し の型定義
    -   my_data.json は元々 axios で取得して各コンポーネントに渡そうとしていた
    -   どうしてもできなかったので頓挫..直接 JSON 取り込みに変更
-   Transition の使用
    -   React コンポーネントをいろいろ使いたかったけど頓挫
-   （CSS：羊の毛玉を飛ばしたかった）

## Next TRY

-   axios -> JSON get -> props
-   React コンポーネントをいろいろ試す
-   React コンポーネントの型定義を理解する

## Appendix

とりかかるまえに取り組んだものたち

-   Udemy：[モダン JavaScript の基礎から始める挫折しないための React 入門](https://www.udemy.com/course/modern_javascipt_react_beginner/)
    -   React 基礎の基礎
    -   概念から説明してくれる
    -   モダン JavaScript から説明してくれる
    -   Todo 管理アプリを JavaScript と React それぞれで作成する
    -   終わったあとなんだか React 楽しいかも？と思わせてくれる
-   Udemy：[Understanding TypeScript -2020](https://www.udemy.com/course/understanding-typescript-jp/)
    -   TypeScript 一番人気
    -   とにかく分かりやすい
    -   オリジナル版を和訳したもので聞きやすい（好みによる）
    -   実践もあるし復習にもなるのでリピートする
-   Udemy：[現役エンジニアのための Webpack 環境構築入門](https://www.udemy.com/course/front-env-setting-webpack/)
    -   無料
    -   Webpack わかんないな！てなったので受講
    -   Webpack の設定内容から学べる
    -   Webpack4 の内容なので自然と Webpack5 はどうなんだろうと調べる
    -   声がいい
-   書籍：JavaScript Primer
-   書籍：プログラミング TypeScript -オライリー

🐑 🐑 🐑 🐑 🐑
 Thank you !
🐑 🐑 🐑 🐑 🐑
