source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'
# 代わりにエッジレールをバンドルします：gem'rails '、github：' rails / rails '
gem 'rails', '~> 6.0.3'
# ActiveRecordのデータベースとしてsqlite3を使用する
gem 'sqlite3', '~> 1.4'
# アプリサーバーとしてPumaを使用する
gem 'puma', '~> 4.1'
# スタイルシートにはSCSSを使用する
gem 'sass-rails', '>= 6'
# アプリのようなJavaScriptをトランスパイルします。続きを読む：https：//github.com/rails/webpacker
gem 'webpacker', '~> 4.0'
# Turbolinksを使用すると、Webアプリケーションをより高速にナビゲートできます。続きを読む：https：//github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# JSONAPIを簡単に構築します。続きを読む：https：//github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
#bootstrap-sassは、LESSをSassへ変換し、必要なBootstrapファイルを現在のアプリケーションですべて利用できるようにします。
gem 'bootstrap-sass', '3.4.1'

#Redisアダプターを使用して、本番環境でアクションケーブルを実行します
#gem'redis '、'〜> 4.0 '
#アクティブモデルhas_secure_passwordを使用する
#gem'bcrypt '、'〜> 3.1.7 '
#アクティブストレージバリアントを使用
#gem'image_processing '、'〜> 1.2 '

#キャッシュにより起動時間を短縮します。 config /boot.rbで必要
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  # コード内の任意の場所で「byebug」を呼び出して実行を停止し、デバッガコンソールを取得します
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # 例外ページでインタラクティブコンソールにアクセスするか、コード内の任意の場所で「console」を呼び出します。
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  #Springは、アプリケーションをバックグラウンドで実行し続けることで開発をスピードアップします。続きを読む：https：//github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Capybaraシステムテストとセレンドライバーのサポートを追加します
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  #ブラウザでシステムテストを実行するためのWebドライバの簡単なインストールと使用
  gem 'webdrivers'
  gem 'rails-controller-testing', '1.0.4'
  gem 'rspec-rails', '~> 4.0.0'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'spring-commands-rspec'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
