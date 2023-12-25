# Rubyのバージョンを指定
FROM ruby:3.1.2

# Node.jsとYarnのインストール
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn

# ImageMagickのインストール
RUN apt-get update -qq && apt-get install -y imagemagick

# その他の依存関係
RUN apt-get install -y postgresql-client redis-tools

# アプリケーションディレクトリを作成
WORKDIR /myapp

# Gemfileをコピーしてbundle installを実行
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install

# アプリケーションのソースコードをコピー
COPY . /myapp

# ポートを開放
EXPOSE 3000

# 起動スクリプトを設定
CMD ["rails", "server", "-b", "0.0.0.0"]

