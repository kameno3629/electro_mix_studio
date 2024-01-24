# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

gem 'bootsnap', '>= 1.1.0', require: false
gem 'coffee-rails', '~> 5.0.0' # Rails 7 との互換性を考慮
gem 'jbuilder', '~> 2.5'
gem 'mini_magick', '~> 4.11.0' # ImageMagick 7.1.0-13 との互換性を考慮
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 5.0' # Rails 7 との互換性を考慮
gem 'rails', '~> 7.0.3'
gem 'sassc-rails', '~> 2.1.2' # Rails 7 との互換性を考慮
gem 'sorcery', '~> 0.16.1'
gem 'turbolinks', '~> 5'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
gem 'uglifier', '>= 1.3.0'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'rspec-rails'
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false
end

group :development do
  gem 'listen', '~> 3.5'
  gem 'web-console', '>= 3.3.0'
  # gem 'spring'
  # gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'factory_bot_rails'
  gem 'selenium-webdriver'
  gem 'webdrivers', '= 5.3.0'
end

gem 'bcrypt', '~> 3.1.7'
gem 'jsbundling-rails'
gem 'react-rails'
gem 'webpacker', '~> 5.0'
