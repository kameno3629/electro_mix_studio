# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ElectroMixStudio
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1 # Railsのバージョンに合わせて修正

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # 以下の行を追加して新しい接続ハンドリング方法を有効にする
    config.active_record.legacy_connection_handling = false

    # 以下の行を追加して新しいCSRFトークン設定を有効にする
    config.action_controller.default_protect_from_forgery = true
  end
end
