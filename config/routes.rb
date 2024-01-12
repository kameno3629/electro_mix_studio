Rails.application.routes.draw do
  root 'home#index'
  resources :playlists, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:new, :create, :show]
  resources :samples, only: [:index, :show, :create, :destroy]
  resources :tracks, only: [:index, :show, :create, :update, :destroy]
  # その他のルートが必要な場合はここに追加
end

