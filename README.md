# electro_mix_studio


### サービス名
Electro Mix Studio

## サービス概要
一般の方でも簡単に遊べる、直感的なEDM制作体験アプリです。サイドメニューから音源を選び、ダッシュボードに配置して、自分だけの音楽を作成しよう！

##　想定されるユーザー層
10代〜20代初め。綺麗め系EDMに興味を持つが、既存の音楽制作ツールが複雑でアクセスしづらいと感じている層、ゲーム感覚で気軽に音楽制作を楽しみたいと考えている層。

## サービスコンセプト
    以下のようなポイントでサービスを作ろうと思った背景やその後の展開など自由に記載してください。
    * ユーザーが抱えている課題感と提供するサービスでどのように解決するのか
        音楽を制作してみたいと思ったことがある方はたくさんいると思います。
        でも、簡単に触れるアプリは多くない。チュートリアルがなくても直感で音楽制作体験ができる、そんなアプリにする。
    * なぜそのサービスを作ろうと思ったのか
        中学生の時から綺麗系のEDMが大好き。自分もEDM作ってみたいなと思い少し調べてみたが、どれも小難しくて時間もないしで断念。きっと同じ思いの人は多いと思い作成に踏み切りました。
    * どのようなサービスにしていきたいか	
        チュートリアルがなくても直感で音楽制作体験ができる、そんなアプリ。
    * どこが売りになるか、差別化ポイントになるか
        音楽制作体験のしやすさ、綺麗め、coolなEDM特化。

## 実装を予定している機能
    *Topページ
        ログイン、新規登録、問い合わせ、利用規約、プライバシーポリシー
    * サイドメニューからの音源選択
        EDMの音源をリアルタイムで視聴して選択することができます。
    * 直感的なダッシュボード
        ・  音源を、ダッシュボードに用意されている行のサイドメニューからドラッグアンドドロップで配置し、音程やテンポをボタンひとつで簡単に変更。
        ・  複数の音源（行）をチェックボックスで選択し、選択したものを一斉に再生可能です。
        ・  行は行下の＋ボタンでワンタップ追加できます。
        ・  各行には音楽の長さを表すフレームがあり、それらはフレーム右の＋ボタンでワンタップ追加することができ、簡単に音楽の時間を長くできます。
        ・  各フレームを長押し選択することで範囲選択し、他の行やフレームの好きなところをコピペできるので、気に入ったフレームを簡単に再利用できます。
    * プレイリスト保存
        作成した音楽はヘッダーメニューの保存ボタンでプレイリストに保存。
    * プレイリスト編集
        いつでもヘッダーにあるプレイリスト一覧から保存したプレイリストをダッシュボードに呼び出すことができ、編集や再生が可能です。
    * 音楽の端末保存
        プレイリスト一覧画面からお気に入りの音楽を直接端末に保存できます。

### その後の機能
    ・好きな音源を追加	
    ・Remix機能	
    ・動画編集
	・AI自動生成
	・SNS機能	
    ・掲示板機能	
    ・より本格的なProプラン（高品質な音源、編集機能など）	
    ・プレイリスト機能の拡張
    ・操作音

### 画面遷移図
  https://gyazo.com/4d812bd66322d4107f97af7fdfb60845

### ER図
    https://gyazo.com/bd7fedb37a15da033292e84dd9c9a24e

# ER図作成用テーブル＆カラム
*      Users テーブル
    * id: ユーザーID (主キー)
    * username: ユーザー名
    * email: メールアドレス
    * password_digest: パスワード (暗号化済み)
    * created_at: 作成日時
    * updated_at: 更新日時
*      Inquiries テーブル
    * id: 問い合わせを一意に識別するID
    * user_id: どのユーザーからの問い合わせかを示す
    * content: 問い合わせの内容
*       Tracks テーブル (音楽制作のデータ)
    * id: トラックID (主キー)
    * user_id: ユーザーID (外部キー)
    * name: トラック名
    * data: トラックのデータ (JSON形式や特定のフォーマットで保存)
    * pitch_adjustment: 音程の調整値
    * tempo_adjustment: テンポの調整値
    * frame_length: フレームの長さ
    * created_at: 作成日時
    * updated_at: 更新日時
*       Samples テーブル (音源の情報)
    * id: サンプルID (主キー)
    * name: 音源名
    * file_path: 音源ファイルへのパス
    * description: 音源の説明
    * created_at: 作成日時
    * updated_at: 更新日時
*       TrackSampleFrames テーブル (トラック内のフレームとそのフレームに配置された音源)
    * id: トラックフレームID (主キー)
    * track_id: トラックID (外部キー)
    * sample_id: サンプルID (外部キー)
    * row_id: トラック行ID (外部キー)
    * frame_position: フレームの位置 (トラック内での順序)
    * created_at: 作成日時
    * updated_at: 更新日時
*       TrackRows テーブル (トラック内の行情報)
    * id: トラック行ID (主キー)
    * track_id: トラックID (外部キー)
    * row_position: 行の位置 (トラック内での順序)
    * volume: 音量調整などの追加情報
    * panning: パンニング調整などの追加情報
    * created_at: 作成日時
    * updated_at: 更新日時
*       Playlists テーブル
    * id: プレイリストID (主キー)
    * user_id: ユーザーID (外部キー)
    * name: プレイリスト名
    * created_at: 作成日時
    * updated_at: 更新日時
*       PlaylistTracks テーブル (プレイリストとトラックの関連を管理)
    * id: プレイリストトラックID (主キー)
    * playlist_id: プレイリストID (外部キー)
    * track_id: トラックID (外部キー)
    * order: トラックの順序
    * created_at: 作成日時
    * updated_at: 更新日時

## 使い方
    * ログインしトップページにアクセスすると、音楽制作画面が表示されます。
    * 左側のサイドメニューから音源を選び、ダッシュボードの行にドラッグ&ドロップ。
    * 行をクリック選択してから、ヘッダーにあるボタンで音程やテンポを調整。
    * 複数の行をチェックして、右上の再生ボタンでまとめて再生。
    * ＋ボタンひとつで行とフレームを追加。
    * クリックアンドホールドでフレームを範囲選択してから、追加した場所をクリックでフレームをコピペ
    * 作成した音楽はヘッダーの「保存」ボタンでプレイリストに追加。
    * ヘッダーの「プレイリスト一覧」ボタンから、過去の作品を選択し編集。

## セットアップ
    (ここには、アプリケーションのセットアップや実行方法に関する手順を記述します。例えば、ローカルでの実行方法、デプロイ方法、必要なツールのインストール方法など。)

    フロントエンド:
        * HTML/CSS/JavaScript
            基本のWeb技術。
        * React.js or Vue.js
            シングルページアプリケーション（SPA）のフレームワークで、音楽制作画面の動的な操作をスムーズに行う。
        * Web Audio API
            Web上で音声を処理・合成するためのAPI。これを使って音楽の再生や編集を行います。
        * WaveSurfer.js or Pizzicato.js
            音声波形の可視化や音声エフェクトを手軽に実装するためのライブラリ。
        * ImageMagick       
            https://imagemagick.org/index.php       ImageMagickは画像を操作・加工出来るソフトウェア（ツール）です。
        * RMagick       
            https://github.com/rmagick/rmagick 
            RubyからImageMagickを利用できるようにするためのラッパーライブラリがRMagickです。このライブラリを利用することで、Rubyのコードから簡単にImageMagickを操作することができます。CarrierWaveとセットで使われることも多いです。

    バックエンド:
        * Ruby on Rails
        あなたが既に使用している言語・フレームワーク。APIサーバーやデータベースとのやりとりを担当。
        * Active Storage
            Railsで提供されるファイルアップロードの機能。音源や保存したトラックの管理に利用。
        * Redis or Sidekiq
            音楽のエクスポートや長時間かかるタスクをバックグラウンドで処理するためのツール。

        データベース:
            * PostgreSQL
                汎用的なRDBMS。Railsとの相性も良い。 
        ホスティング/デプロイ:
            * Heroku
                簡単にRailsアプリをデプロイできるPaaS。
            * AWS S3
            音源やユーザーが生成した音楽ファイルを保存するためのストレージサービス。
        バージョン管理:
            * Git & GitHub
                ソースコードのバージョン管理や共同開発のためのツール。
        認証 & セキュリティ:
            * Devise
                Rails用の認証システム。
            * OAuth
                ソーシャルログインの実装の際に使用。  

    その他:
        ActiveJobにはキューイングバックエンドに接続できるアダプタが必要となります。以下それぞれのアダプタについて解説いたします。
        *Sidekiq
            *https://github.com/sidekiq/sidekiq
            *キューストレージ：Redis
            *マルチスレッドで動くので処理速度が速く、メモリ効率も高い
        *Resque
            *https://github.com/resque/resque
            *キューストレージ：Redis
            *シングルスレッド・マルチプロセスで動く為、メモリリークなどは起こしづらい
        *Delayed Job
            *https://github.com/collectiveidea/delayed_job
            *キューストレージ：RDBMS
            *ストレージにRDBMSを使用するため、導入が容易

## ライセンス・クレジット
    (ここに、使用した音源やライブラリのクレジット、アプリケーションのライセンス情報などを記載します。)



# ５W1H
・Who（誰に/ターゲット） : EDM初心者に。もしくは音楽作成経験をしてみたい方に。
　・Why（なぜ、何のために/利用動機） : 音楽作成は普段味わえないExitingな経験だから。
　・When（いつ/利用時間帯、タイミング） : 空き時間やクリエイティブな時間に。
・Where（どこで/スマートフォン？PC？外出先？自宅？） : 本当はAPPでのリリースが理想。手軽に楽しんで欲しい。
・What（何を/サービス、技術、提供価値） : 直感的なUI。初心者でも頭を使わずに楽しめる。

# オズボーンのチェックリスト
1. 転用 : 改善･改良して新しい使いみちは？
            ＞SNS連携で簡単シェア
        そのままで新しい使いみちは
            ＞より本格的なProプラン
2. 応用 : 他にこれに似たものはないか
            ＞ある。
        過去に似たものは無いか
            ＞ある。
        何か真似できないか
            ＞作成画面やUIは特に参考にする
3. 変更 : 意味、色、動き、音、匂い、様式、型を変えられないか
            ＞
4. 拡大 : 大きくしたら
            ＞より高品質な音源、編集機能
        強く、高く、長く、厚くしてみたら
            ＞
5. 縮小 : 小さくしたら
            ＞より簡単な、パッケージの用意やフレームの提供、簡素化されたUI
        弱く、低く、短く、薄く、無くす
            ＞
6. 代用 : 何か代わりにできないか
            ＞
        他のアプローチ
            ＞
7. 置換 : 要素を入れ替えたら
            ＞
8. 逆転 : 反対にしてみたら
            ＞作成された音楽をアレンジ編集、楽曲を細分化
        順序を逆にしてみる
            ＞好きな音源を追加できる
9. 結合 : 何かと合体させてみたら
            ＞Remix機能、動画編集、AI自動生成、SNS機能、掲示板機能
        混ぜてみたら
            ＞