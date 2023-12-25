source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

gem 'rails', '~> 7.0.3'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 5.0' # Rails 7 との互換性を考慮
gem 'sassc-rails', '~> 2.1.2' # Rails 7 との互換性を考慮
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 5.0.0' # Rails 7 との互換性を考慮
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'mini_magick', '~> 4.11.0' # ImageMagick 7.1.0-13 との互換性を考慮
gem 'bootsnap', '>= 1.1.0', require: false
gem 'sorcery', '~> 0.16.1'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.5'
  # gem 'spring'
  # gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers', '= 5.3.0'
end

