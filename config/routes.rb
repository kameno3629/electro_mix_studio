# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'
  resources :audio_files, only: [:new, :create]
  resources :playlists, only: %i[index show create update destroy]
  resources :users, only: %i[new create show]
  resources :samples, only: %i[index show create destroy]
  resources :tracks do
    collection do
      get 'create', to: 'tracks#create' # "/tracks/create" を "create" アクションにリダイレクト
    end
  end
  # その他のルートが必要な場合はここに追加
end
